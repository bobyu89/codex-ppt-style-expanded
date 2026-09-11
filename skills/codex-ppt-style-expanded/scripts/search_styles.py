"""Offline discovery of deck recipes and the pinned upstream prompt index."""
import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / 'references'

def records():
    recipes = json.loads((ROOT / 'styles.json').read_text(encoding='utf-8'))
    library = json.loads((ROOT / 'image2-library.json').read_text(encoding='utf-8'))
    result = [dict(x, kind='deck-recipe') for x in recipes]
    result += [dict(x, kind='image-template') for x in library['templates']]
    for path in sorted((ROOT / 'upstream-ppt').glob('*.md')):
        result.append({'id': 'ppt:' + path.stem, 'name': path.stem,
                       'kind': 'upstream-ppt', 'reference': str(path),
                       'content': path.read_text(encoding='utf-8')})
    return result

def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--query', default='')
    p.add_argument('--limit', type=int, default=5)
    p.add_argument('--list', action='store_true')
    p.add_argument('--show')
    a = p.parse_args()
    if a.limit < 1:
        p.error('--limit must be positive')
    rows = records()
    if a.show:
        matches = [x for x in rows if x['id'] == a.show or
                   x.get('short_code', '').casefold() == a.show.casefold()]
        if not matches:
            p.error('unknown style/template ID: ' + a.show)
        print(json.dumps(matches[0], ensure_ascii=False, indent=2))
        return
    words = a.query.casefold().split()
    ranked = []
    for row in rows:
        body = json.dumps(row, ensure_ascii=False).casefold()
        score = sum(word in body for word in words)
        if not words or score:
            ranked.append((score, row))
    ranked.sort(key=lambda pair: -pair[0])
    selected = ranked if a.list else ranked[:a.limit]
    print(json.dumps([{'id': r['id'], 'kind': r['kind'],
                      'name': r.get('name', r.get('title')), 'matched_terms': score}
                     for score, r in selected], ensure_ascii=False, indent=2))

if __name__ == '__main__':
    main()
