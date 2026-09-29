# A2P 10DLC (SMS) compliance: GoHighLevel registration

Researched 2026-09-29 for the A2P 10DLC brand and campaign registration in
GoHighLevel (LC Phone, on Twilio). Leads come from Meta (Facebook/Instagram) ads
to landing pages on projectautomate.com, where the embedded GHL form collects
them. This is a compliance checklist, not legal advice. Have California counsel
review the Terms, the Privacy Policy and the consent wording before launch.

The website side lives in this repo. Everything else is set in GoHighLevel and
has to match it word for word: the form's checkboxes, the auto-replies and the
registration fields. Carriers reject campaigns when these disagree.

---

## 1. Done in this repo

| Change | Where |
| --- | --- |
| Footer shows only (310) 402-4818; (310) 740-5375 removed from it | `src/components/layout/Footer.astro`, `siteInfo.smsPhone` |
| Footer states the DBA: "Project Automate Inc., doing business as PROJECT: automate" (GHL requires the DBA to be visible outside the form) | `Footer.astro` |
| Terms: a full **Text Messaging (SMS) Terms** section at `/terms-and-conditions/#sms-terms`, placed right after Definitions. It covers the program name, how you opt in (checkbox only; not a condition of purchase), marketing and non-marketing message types, frequency, message and data rates, STOP plus the other keywords, opt-out by any reasonable means within 10 business days, START to rejoin, HELP plus phone and email, the carrier-liability sentence, 18+, no-sharing and compliance | `src/pages/terms-and-conditions/_LegalSection.astro` |
| Terms: California governing law (Los Angeles County); full contact block; line saying the general Terms don't enroll anyone in texts | same |
| Privacy: the two contradictory SMS sections merged into one **Text Messaging (SMS)** section at `/privacy-policy/#sms`, with HighLevel's required no-sharing clause word for word | `src/pages/privacy-policy/_LegalSection.astro` |
| Privacy: SMS data carved out of "Sharing Your Information"; recipient categories named; GHL visitor tracking described; the form's real fields listed; Do Not Track, Data Retention and Your Choices and Rights added (CalOPPA) | same |
| Both legal pages: contact is (310) 402-4818 and josh@projectautomate.com (`siteInfo.legalEmail`), dated September 29, 2026; the "Legal" eyebrow removed | both files, `src/data/site.ts` |

**Nothing is live until it's merged to `main`.** Reviewers and HighLevel's AI
"Review Application" read the live pages, so deploy before submitting. Never
put GitHub Pages (staging) URLs in the registration.

---

## 2. To do in the GHL form (form `1k0f27S2E7AnT195u3ly`)

Every copy of the form on the site (inline and the popup) is this one form, so
fixing it in GHL fixes all of them.

### 2.1 Critical: fix before submitting

1. **Make the SMS checkbox optional.** It's GHL's "T & C" element
   (`terms_and_conditions`), and the live form marks it `data-required="true"`,
   so nobody can submit without ticking it. Carriers treat that as forced
   consent (Twilio 30923 / 30931). Turn **Required** off and test that the form
   submits with the box unticked. Leave the phone field required; that's
   allowed as long as SMS consent is optional.
2. **Fix the checkbox wording.** The live text says "about **Land Scaping**"
   (left over from a template) and uses "Project:automate". Replace it with the
   text in 2.2.
3. **Add a second checkbox for marketing texts.** HighLevel's 2026 guidance
   says to use two separate optional checkboxes. See 2.2 and the use-case
   decision in 4.2.
4. **Put the Terms and Privacy links inside the form**, directly under the
   checkboxes (a Text element). The site footer doesn't count: the form is an
   iframe, and the popup copy covers the page. Twilio has separate rejection
   codes for a missing Terms link, a missing Privacy link, and links placed
   away from the opt-in (30549, 30550, 30564).

### 2.2 Paste-ready form text

Use the business name **exactly** as it appears on the IRS CP 575 / 147C letter
(check "Inc." vs ", Inc."). Both boxes must be unchecked by default and
**not** required. Keep "Message and data rates may apply" spelled out:
Twilio 30569 looks for that exact phrase.

**Checkbox 1: non-marketing**

> By checking this box, I consent to receive non-marketing text messages from
> Project Automate Inc. (PROJECT: automate) about my consultation request,
> appointment scheduling and reminders, project and installation updates, and
> customer support. Message frequency varies. Message and data rates may apply.
> Text HELP for assistance, reply STOP to opt out.

**Checkbox 2: marketing**

> By checking this box, I consent to receive marketing text messages from
> Project Automate Inc. (PROJECT: automate), such as special offers, event
> invitations and new service announcements. Marketing messages may be sent
> using automated technology. Message frequency varies. Message and data rates
> may apply. Text HELP for assistance, reply STOP to opt out. Consent is not a
> condition of purchase.

**Text element directly below the checkboxes** (links open in a new tab):

> Text messages are optional. You can submit this form without checking either
> box. Consent to receive text messages is not a condition of purchase.
> PROJECT: automate is a DBA of Project Automate Inc.
> [Terms & Conditions](https://projectautomate.com/terms-and-conditions/) |
> [Privacy Policy](https://projectautomate.com/privacy-policy/)

**Submit button:** "Request my consultation" instead of "Submit" (optional, but
clearer for reviewers).

Store each checkbox as its own field, so workflows can filter on it. Save a
dated screenshot of the old and new form.

### 2.3 Meta Pixel inside the form

The site has no Meta Pixel, but **the GHL form has one in its own settings**
(pixel `1748478050610981`). When the form URL is opened on its own, it fires
`PageView` and sets an `_fbp` cookie. It's not yet known whether it also fires
when the form is embedded on the site: the site tells the form "essential
cookies only" (`cookie-config=essential`), and GHL may respect that. The
Privacy Policy and cookie notice currently say there are no advertising
cookies. So either:

- remove the pixel ID from the form settings until the site's pixel goes in, or
- keep it. Then update the Privacy Policy Cookies section, `CookieNotice.astro`
  and the cookie rule in `CLAUDE.md`.

When the pixel is added (on the site or in the form), **turn off Automatic
Advanced Matching** for it in Meta Events Manager. Otherwise hashed phone
numbers and emails from the opt-in form go to Meta, which breaks the SMS
no-sharing promise (Twilio 30932). For the same reason, never upload SMS
opt-in numbers to Meta Custom Audiences.

---

## 3. To do in GHL settings and workflows

1. **Only text people who ticked a box.** Every workflow that sends SMS
   (including the one triggered by this form) must filter on the consent
   field. Leads captured while the checkbox was *required* didn't give valid
   consent: don't auto-text them. Reach them by phone or email, or ask them to
   submit the form again. Confirm this approach with counsel.
2. **Send the opt-in confirmation first**, straight after the form, before any
   other text.
3. **Turn on SMS Compliance Settings** (Settings → Phone Numbers / SMS: sender
   ID and opt-out wording on the first message). Test that it doesn't
   duplicate the confirmation's wording or push it into two segments.
4. **Opt-out keywords.** GHL handles STOP, STOPALL, CANCEL, UNSUBSCRIBE, END and
   QUIT. The Terms also promise to honor "revoke", "opt out" and requests by
   email or phone (FCC rule since 2025-04-11: any reasonable means, within 10
   business days). Build a workflow: inbound SMS contains "revoke" or "opt out"
   → set DND on SMS and send the STOP reply. Train whoever reads the inbox and
   answers (310) 402-4818 to set DND by hand.
5. **Test START** clears DND, since the Terms and STOP reply promise it.
6. **Quiet hours.** Send only between 9 a.m. and 8 p.m. in the recipient's
   time zone. That's inside the federal 8 a.m.–9 p.m. window and covers the
   stricter state rules (FL, OK, MD, TX, OR).
7. **Register in the permanent sub-account.** The form and tracking are in a
   temporary sub-account (`src/data/ghl.ts`). Register A2P where the live form
   and the sending number will stay, or you'll re-register and pay again after
   the move. When the form moves, update `formId` **and** `trackingId` in
   `src/data/ghl.ts` together.

### Auto-replies

These use straight apostrophes only. A curly ’ switches the whole text to
Unicode, which halves the characters per segment.

| Message | Text | Length |
| --- | --- | --- |
| Opt-in confirmation | PROJECT: automate: You're subscribed to texts from Project Automate Inc. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out. | 160 |
| HELP reply | PROJECT: automate (Project Automate Inc.): For help, call (310) 402-4818 or email josh@projectautomate.com. Msg & data rates may apply. Reply STOP to opt out. | 158 |
| STOP reply (once only; no marketing) | PROJECT: automate: You are unsubscribed and will receive no further texts from us. Reply START to resubscribe. | 110 |

Enter the same three texts in the A2P wizard's opt-in, HELP and opt-out
message fields.

---

## 4. A2P registration (Trust Center)

Use **Manual Setup**, not the Chat Widget flow. Opt-in method: **Website
forms** only. Don't tick "Facebook lead forms" unless Meta Instant Forms
start collecting phone numbers; those would need their own consent checkbox.

### 4.1 Brand

| Field | Value |
| --- | --- |
| Legal name / EIN | Exactly as on the CP 575 / 147C: [Project Automate Inc.] / [EIN] |
| DBA | PROJECT: automate |
| Brand type | Low-Volume Standard ($22.50 one-time in GHL) or Standard. Not Sole Proprietor |
| Website | https://projectautomate.com/ |
| Authorized representative | Josh Trevithick, josh@projectautomate.com, his own US mobile (not VoIP, not the LC Phone number) |

### 4.2 Campaign use case

**Recommended: Mixed** (GHL switches it to Low Volume Mixed, $1.50/month).
Follow-ups to Meta leads usually include booking nudges or offers, which
carriers and the FCC treat as marketing. Mixed also matches HighLevel's
two-checkbox standard. **The use case can't be changed after the campaign is
created.** Pick Informational / Non-Marketing only if the texts will never
promote anything. Then drop checkbox 2, the marketing bullet in the Terms, and
sample 5, and confirm with GHL A2P support first.

### 4.3 URLs and content flags

| Field | Value |
| --- | --- |
| Privacy Policy URL | https://projectautomate.com/privacy-policy/ |
| Terms & Conditions URL | https://projectautomate.com/terms-and-conditions/ |
| Opt-in page | https://projectautomate.com/get-started/ (form inline on the page) |
| Embedded links | Yes (samples 4 and 5) |
| Embedded phone number | Yes (sample 2) |
| Age-gated / direct lending / affiliate marketing | No / No / No |

### 4.4 Campaign description

> Project Automate Inc. is a home technology integrator in Manhattan Beach,
> California, designing and installing smart home automation, lighting control,
> audio/video, outdoor lighting and audio, and security systems. We are doing
> DBA as PROJECT: automate. We text homeowners and clients who request a
> consultation through the form on our own website, projectautomate.com, and
> check an optional SMS consent box. Non-marketing messages cover replies to
> their inquiry, consultation scheduling, appointment confirmations and
> reminders, project and installation updates, and customer support. Contacts
> who also check our separate, optional marketing box may receive occasional
> offers, event invitations and new service announcements. Our own team sends
> the messages from our CRM. We do not buy, sell or share contact lists, and we
> do not send messages on behalf of any other business.

### 4.5 Message flow / call to action

> End users opt in only on our own website, projectautomate.com, operated by
> Project Automate Inc. (DBA PROJECT: automate). They reach it from our
> Facebook and Instagram ads, from search, or from site navigation. Our ads
> link to pages on our own domain, such as
> https://projectautomate.com/outdoor-lighting-audio/ and
> https://projectautomate.com/get-started/. The same consultation form appears
> inline on those pages, on https://projectautomate.com/schedule/ and on the
> homepage, and in a pop-up opened by the "Book a Consultation" buttons across
> the site. The form asks for name, phone, email, address and project details.
> Directly above the submit button are two optional, unchecked checkboxes: one
> for non-marketing texts (inquiry replies, scheduling, reminders, project
> updates, support) and a separate one for marketing texts. Each names Project
> Automate Inc. (PROJECT: automate) and states that message frequency varies,
> message and data rates may apply, and to text HELP for help or STOP to opt
> out. The form can be submitted without checking either box, and only
> contacts who check a box are texted. Links to our Terms
> (https://projectautomate.com/terms-and-conditions/) and Privacy Policy
> (https://projectautomate.com/privacy-policy/) appear directly below the
> checkboxes. After opting in, the contact receives a confirmation text with
> frequency, rates, HELP and STOP information. We never buy, sell or share
> opt-in data. Screenshot of the form: [public URL of hosted screenshot]

Host the screenshot somewhere public with no login (e.g. GHL Media Storage),
not on staging.

### 4.6 Sample messages

Use [brackets] for variables, never GHL merge fields like `{{contact.first_name}}`.

| # | Type | Sample |
| --- | --- | --- |
| 1 | Non-marketing | PROJECT: automate: Hi [First Name], this is [Rep Name]. Thanks for your consultation request on projectautomate.com. When is a good time for a quick call this week? Reply STOP to opt out. |
| 2 | Non-marketing | PROJECT: automate: Reminder: your design consultation is on [Date] at [Time] at [Address]. Questions or need to reschedule? Call (310) 402-4818. Reply STOP to opt out. |
| 3 | Non-marketing | PROJECT: automate: Hi [First Name], a project update: [Technician Name] will arrive on [Date] between [Time Window] to install your [System]. Reply STOP to opt out. |
| 4 | Non-marketing | PROJECT: automate: Hi [First Name], you can pick a consultation time that suits you here: https://projectautomate.com/schedule/ Reply HELP for help, STOP to opt out. |
| 5 | Marketing | PROJECT: automate: This season, homeowners who book an outdoor lighting and audio design consultation receive [Offer]. Details: https://projectautomate.com/outdoor-lighting-audio/ Reply STOP to opt out. |

Links in real messages must use projectautomate.com, not bit.ly or other
public shorteners. GHL trigger links need a branded domain, or turn them off.

Before submitting, run HighLevel's **Review Application** (AI compliance
check). It crawls the opt-in page, Terms and Privacy Policy, and blocks
submission until required checks pass. Resubmitting a rejected campaign costs
nothing extra, but each round takes days, so fix everything first.

---

## 5. Open questions for the client

1. Will any text ever promote something: offers, seasonal specials, "book your
   free consultation" nudges, events, re-engaging old leads? This decides
   Mixed vs Informational (4.2), and it can't be changed later.
2. Is (310) 402-4818 the LC Phone number that will *send* the texts, or only
   the support line? If it sends, does it also take calls, or play a voicemail
   naming PROJECT: automate?
3. Is josh@projectautomate.com the single support email for the SMS program
   and the brand registration? The footer and other pages still show
   sales@projectautomate.com.
4. Should (310) 740-5375 stay anywhere else? It's still the main number in the
   header, next to the form on /get-started/, /schedule/ and
   /outdoor-lighting-audio/, in CTAs, the thank-you page, the 404 page,
   `public/llms.txt` and the JSON-LD schema.
5. The exact legal name, EIN and address on the CP 575 / 147C. Is
   "PROJECT: automate" a filed fictitious business name (DBA)?
6. Which GHL sub-account will own the form and the number permanently, and
   will the move happen before registering?
7. Are numbers collected any other way (Meta Instant Forms, calls, signed
   proposals, in person)? Existing clients who'll get installation updates
   need a documented opt-in too, such as a consent line in the proposal.
8. Is any lead data shared outside the company (subcontractors, manufacturers,
   design partners)? Have lead lists ever been bought or imported?
9. Should the Meta Pixel in the GHL form stay (2.3)?
10. Is counsel OK with the 18+ clause, California governing law with a Los
    Angeles County venue, and the no-sharing promise?

---

## 6. Rules that changed in 2025–2026

- **2025-01-24:** the FCC "one-to-one consent" rule was vacated before it took
  effect. Carriers still require consent to be for one brand only, and it can
  never be shared or bought.
- **2025-02-01:** unregistered 10DLC traffic is blocked outright.
- **2025-04-11:** FCC revocation rules. Consumers can opt out by any
  reasonable means (STOP, QUIT, END, REVOKE, OPT OUT, CANCEL, UNSUBSCRIBE,
  email, phone), and it must be honored within 10 business days. The
  "revoke-all" part (one opt-out ends every kind of robotext) is delayed to
  2027-01-31. A draft FCC order rewriting it goes to a vote on 2026-09-30.
- **2025-11 to 2026-03:** GHL rebuilt the Trust Center and A2P flow, added the
  AI Review Application, and made the Chat Widget the default (use Manual
  Setup instead).
- **2026-03-23:** Twilio and GHL rejections now name the exact element that
  failed. The 2026-09 code list checks each Terms and checkbox element
  separately, including the carrier-liability sentence (30563).
- **2026-06-30:** Twilio requires Privacy Policy and Terms URLs for every new
  campaign.
- **2026-07-30:** HighLevel's current guide requires two optional checkboxes,
  links inside the form, the DBA visible on the site, and policy contacts that
  match the brand registration.

## 7. Key sources

- HighLevel, "How to get your phone number A2P approved in 2026" (updated 2026-07-30):
  https://help.gohighlevel.com/support/solutions/articles/155000007237
- HighLevel, "A2P Campaign Rejections, Required Fixes & Vetting Errors" (2026-09-09):
  https://help.gohighlevel.com/support/solutions/articles/155000007572
- HighLevel, "A2P Campaign Registration: Step-by-Step Guide" (2026-09-11):
  https://help.gohighlevel.com/support/solutions/articles/155000004539
- HighLevel, "A2P 10DLC Messaging Fees" (2026-09-24):
  https://help.gohighlevel.com/support/solutions/articles/155000005200
- LeadConnector, "A2P Opt-In Form, Privacy Policy and Terms Guidelines" (2026-08-31):
  https://help.leadconnectorhq.com/support/solutions/articles/155000004619
- Twilio, "A2P 10DLC Campaign Registration Rejected" code list (2026-09):
  https://support.twilio.com/hc/en-us/articles/15778026827291
- Twilio, "A2P 10DLC Campaign Onboarding Guide" (2026-09-24):
  https://support.twilio.com/hc/en-us/articles/11847054539547
- The Campaign Registry, CSP User Guide (April 2026):
  https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Apr_2026-v2_comp.pdf
- CTIA Messaging Principles and Best Practices (May 2023, still current):
  https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf
- 47 CFR 64.1200 (TCPA rules): https://www.law.cornell.edu/cfr/text/47/64.1200
- FCC DA 26-12 (revoke-all delayed to 2027-01-31): https://docs.fcc.gov/public/attachments/DA-26-12A1.pdf
- California CalOPPA, Bus. & Prof. Code §22575:
  https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=22575
