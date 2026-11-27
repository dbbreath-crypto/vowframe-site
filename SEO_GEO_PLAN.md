# Vowframe SEO + GEO plan (local prototype)

**Scope.** GEO here means visibility in generative search answers. Geographic targeting is covered separately. This is a keyword and content architecture, not a claim about search volume or ranking. The site is only on localhost, so search engines cannot index it yet.

## 1. Core positioning

Vowframe makes **custom AI wedding films** before the wedding from approved photos, the couple's story and an agreed creative direction. The film is delivered for a reception screen. Formats: entrance film, love story film, movie-style trailer. This definition should remain consistent across pages, metadata, social profiles and enquiries.

Do not call the user-supplied mood photographs client work or finished film stills. Do not imply the couple physically travelled to the depicted place. Do not promise exact likeness quality, turnaround, pricing or revisions until those terms are real.

## 2. Keyword map

| Priority | Search intent | Keywords and natural variants | Page or section |
|---|---|---|---|
| P1 | Hire a provider | custom AI wedding film; AI wedding video service; personalized AI wedding video | Home title, opening description, service definition |
| P1 | Wedding reception use | wedding reception video; wedding reception opening video; wedding entrance video | Entrance format and reception moment section |
| P1 | Film from existing material | AI wedding video from photos; wedding film from photos; personalized wedding video from photos | How it works, inputs FAQ |
| P2 | Story format | wedding love story video; love story film for wedding reception | Our Story format; later dedicated page |
| P2 | Cinematic format | wedding movie trailer; cinematic wedding trailer; custom wedding trailer video | Trailer format; later dedicated page |
| P2 | Travel concept | travel-inspired wedding film; destination wedding video concept; cinematic travel wedding video | Visual world section, with a clear concept-photo label |
| P3 | Research questions | what is an AI wedding film; do we need new footage; can AI make a wedding video from photos; how does AI wedding video work | FAQ and later guide |
| P3 | Sensitive/qualified | AI face swap wedding video; face replacement wedding film | Only in a future consent-focused FAQ if this is truly offered; never make unauthorized likeness use a selling point |

Use one primary intent per page. Write clear headings and answers for visitors. Avoid repeating every keyword variant unnaturally.

## 3. Current site implementation

- The home page has a descriptive title, meta description, exact service phrase near the hero and a plain-English definition in the first content section.
- FAQ answers what the service is, whether travel/new footage is needed, what inputs are used, privacy, preview and venue delivery.
- The page includes **Service** JSON-LD matching visible content. It does not assert prices, ratings, client reviews, address or service regions.
- Image alt text describes what is actually visible. Mood photography is labelled as mood reference.
- The page works without JavaScript for primary content; motion is progressive enhancement.

## 4. Content architecture when real material exists

1. **Home**: positioning, formats, proof, process, enquiry.
2. **/ai-wedding-films/**: full service explanation; inputs, production stages, deliverables, consent, boundaries.
3. **/wedding-entrance-video/**: entrance use case, timing, AV handoff, real example.
4. **/wedding-love-story-video/**: narrative format, material checklist, real example.
5. **/wedding-movie-trailer/**: trailer format, creative scope, real example.
6. **/examples/**: only consented finished films with truthful descriptions. This is likely the strongest trust and GEO asset.
7. **/faq/**: detailed answers based on actual customer questions.
8. **/about/** and **/contact/**: real team/business identity and genuine contact details.

Do not publish thin pages that repeat the home page. Create a format page when it has unique examples, specifications and answers.

## 5. GEO answer inventory

A generative answer should be able to extract precise, verifiable answers to:

- What is an AI wedding film, and how is it different from wedding-day videography?
- What do couples submit, and what permissions are needed?
- Can a travel-inspired film be made without travelling?
- What can be customized, and what limitations should couples expect?
- When can the couple preview the film? How many revision rounds apply?
- What file is delivered, and who checks venue playback?
- What happens to personal photos, voice materials and finished films?
- What does it cost, and how long does it take? **Publish only after real terms are set.**

Make each answer visible on the page. Support claims with original examples and clear policies. No invented testimonials, fake press logos or fabricated case studies. A special `llms.txt` file is not a substitute for indexable, useful pages.

## 6. Geographic targeting

Start with one English site. Do not create US/UK/Australia city pages merely by swapping place names. If the business actually supports different currencies, time zones, turnaround terms or venue formats, publish distinct regional guidance. Add `hreflang` only after real localized URLs exist. Do not use `LocalBusiness` markup or map listings unless there is a genuine eligible business location.

## 7. Launch dependencies and measurement

Before search launch: choose a public domain; confirm rights for all photos; replace the prototype form with a real secure enquiry route; add truthful contact/business details; publish consented work; then add absolute canonical URLs, sitemap and robots rules. Verify the domain in Google Search Console and Bing Webmaster Tools. Measure impressions by query, clicks, indexed pages, enquiries and qualified leads. Track AI referral sources where identifiable, but do not treat an AI citation as a guaranteed outcome.

## Primary-source basis

- Google Search Central, SEO essentials: https://developers.google.com/search/docs/essentials
- Google Search Central, generative AI guidance: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Search Central, helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search Central, structured data policies: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Schema.org Service: https://schema.org/Service

