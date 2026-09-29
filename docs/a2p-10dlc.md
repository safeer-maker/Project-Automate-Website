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
| Terms: a full **Text Messaging (SMS) Terms** section at `/terms-and-conditions/#sms-terms`, placed right after Definitions. It covers the program name, how you opt in (checkbox only; not a condition of purchase), the informational message types (and a statement that no marketing texts are sent), frequency, message and data rates, STOP plus the other keywords, opt-out by any reasonable means within 10 business days, START to rejoin, HELP plus phone and email, the carrier-liability sentence, 18+, no-sharing and compliance | `src/pages/terms-and-conditions/_LegalSection.astro` |
| Terms: California governing law (Los Angeles County); full contact block; line saying the general Terms don't enroll anyone in texts | same |
| Privacy: the two contradictory SMS sections merged into one **Text Messaging (SMS)** section at `/privacy-policy/#sms`, with HighLevel's required no-sharing clause word for word | `src/pages/privacy-policy/_LegalSection.astro` |
| Privacy: SMS data carved out of "Sharing Your Information"; recipient categories named; GHL visitor tracking described (and no longer called "necessary"); the form's real fields listed; Tracking by other companies, Do Not Track, Data Retention and Your Choices and Rights added (CalOPPA) | same |
| Cookie notice says "No advertising cookies" instead of "Necessary cookies only", since GHL's visitor identification isn't strictly necessary | `src/components/ghl/CookieNotice.astro` |
| Both legal pages: contact is (310) 402-4818 and josh@projectautomate.com (`siteInfo.legalEmail`), dated September 29, 2026; the "Legal" eyebrow removed | both files, `src/data/site.ts` |

**Nothing is live until it's merged to `main`.** Reviewers and HighLevel's AI
"Review Application" read the live pages, so deploy before submitting. Never
put GitHub Pages (staging) URLs in the registration.

**Order of work.** Once merged, the Terms describe the *fixed* form (one
optional box), so the form and the site must change together:

1. Pause every GHL workflow that sends SMS.
2. Make and test the form changes in 2.1 and 2.2.
3. Merge to `main` the same day.
4. Run Review Application, then submit.
5. Turn SMS workflows back on only after the campaign is approved, filtered as
   in 3.1.

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
   text in 2.2. HighLevel requires the checkbox to name the same message types
   as the campaign description, not just "non-marketing messages".
3. **Keep one checkbox.** The campaign is informational only (4.2), so there
   is no marketing checkbox. HighLevel's approval article shows a two-box
   template, but its rejections article (155000007572, code 30913) says a
   sender of transactional messages only should say so in the campaign
   description, which 4.4 does. If Review Application or A2P support still
   asks for a marketing box, open a support ticket, quote the Informational use
   case and keep the single box. Don't add a marketing box: it would collect
   consent for texts this campaign can't send, and the Terms say none are sent.
4. **Put the Terms and Privacy links inside the form**, directly under the
   checkbox (a Text element). The site footer doesn't count: the form is an
   iframe, and the popup copy covers the page. Twilio has separate rejection
   codes for a missing Terms link, a missing Privacy link, and links placed
   away from the opt-in (30549, 30550, 30564).

### 2.2 Paste-ready form text

Use the business name **exactly** as it appears on the IRS CP 575 / 147C letter
(check "Inc." vs ", Inc."). If it differs from "Project Automate Inc.", update
`siteInfo.legalName` (it feeds the Terms, Privacy Policy and footer) and every
"Project Automate Inc." in this guide in the same change. The box must be
unchecked by default and **not** required. Keep "Message and data rates may
apply" spelled out: Twilio 30569 looks for that exact phrase.

**The checkbox** (replaces the current "Land Scaping" text). It lists the same
five message types as the Terms and the campaign description (4.4), which
HighLevel's review compares:

> By checking this box, I consent to receive non-marketing text messages from
> Project Automate Inc. (PROJECT: automate) at the phone number provided about
> my consultation request, including replies to my inquiry, consultation
> scheduling, appointment confirmations and reminders, project and
> installation updates, and customer support. Message frequency varies.
> Message and data rates may apply. Text HELP for assistance, reply STOP to
> opt out.

**Text element directly below the checkbox** (links open in a new tab):

> Text messages are optional. You can submit this form without checking the
> box. Consent to receive text messages is not a condition of purchase.
> PROJECT: automate is a DBA of Project Automate Inc.
> [Terms & Conditions](https://projectautomate.com/terms-and-conditions/) |
> [Privacy Policy](https://projectautomate.com/privacy-policy/)

**Submit button:** "Request my consultation" instead of "Submit" (optional, but
clearer for reviewers).

Save a dated screenshot of the old and new form.

### 2.3 Meta Pixel inside the form

The site has no Meta Pixel, but **the GHL form has one in its own settings**
(pixel `1748478050610981`). When the form URL is opened on its own, it fires
`PageView` and sets an `_fbp` cookie. It's not yet known whether it also fires
when the form is embedded on the site: the site tells the form "essential
cookies only" (`cookie-config=essential`), and GHL may respect that. The
Privacy Policy says there are no advertising cookies, and that no other company
tracks visitors across websites through the site. CalOPPA requires that
statement, so it has to be true.

**Recommended now:** remove the pixel ID from the form's settings until the
site's own pixel is set up properly.

**Before a Meta Pixel goes on the site (or back in the form):**

- Load it only after the visitor clicks **Accept** on a banner with Accept and
  Decline. Write `cookie-config=all` only on Accept. Today's notice is
  notice-only and records `essential`.
- Update the Privacy Policy: the Cookies section, the "no advertising cookies"
  line, and "Tracking by other companies" (it must then say Meta collects
  activity on this site and elsewhere). Update `CookieNotice.astro` and the
  cookie rule in `CLAUDE.md`.
- If the CCPA applies (question 11 in section 5), add a "Do Not Sell or Share
  My Personal Information" link and honor Global Privacy Control.
- **Turn off Automatic Advanced Matching** in Meta Events Manager. Otherwise
  hashed phone numbers and emails from the opt-in form go to Meta, which breaks
  the SMS no-sharing promise (Twilio 30932).
- The same applies to GHL's **Facebook Conversion API** workflow action and
  Conversion Leads: leave Phone unmapped under Customer Parameters. Check this
  whenever a Meta integration is connected in GHL.
- Never upload SMS opt-in numbers to Meta Custom Audiences.

---

## 3. To do in GHL settings and workflows

1. **Only text people who ticked the box.** Every workflow that sends SMS
   (including the one triggered by this form) must filter on the form's
   Terms & Conditions consent value. Leads captured while the checkbox was
   *required* didn't give valid consent: don't auto-text them. Reach them by
   phone or email, or ask them to submit the form again. Confirm this approach
   with counsel.
2. **Send the opt-in confirmation first**, straight after the form, before any
   other text.
3. **Turn on SMS Compliance Settings** (Settings → Phone System → Messaging
   tab): turn on the opt-out message and sender information, and set Sender ID
   to exactly "PROJECT: automate". GHL adds these lines to the first message in
   a conversation regardless. Send the confirmation to a test phone. If it
   arrives in two parts or repeats the STOP line, shorten it (e.g. drop "from
   Project Automate Inc.", since the prefix already names the brand).
4. **Opt-out requests.** GHL handles STOP, STOPALL, CANCEL, UNSUBSCRIBE, END and
   QUIT itself. The Terms also promise to honor any other reasonable request
   (FCC rule since 2025-04-11: any reasonable means, within 10 business days).
   - Build a workflow: trigger Customer Replied (SMS), reply contains "revoke",
     "opt out", "stop texting", "remove me" or "wrong number" → **Send SMS**
     (the STOP reply below) → wait 1 minute → **Enable DND for SMS**. The send
     has to come first, because GHL blocks SMS to contacts on DND.
   - Every business day, someone reads all inbound replies in Conversations.
     They set DND by hand on any other request to stop ("don't text me",
     "leave me alone") *without* sending a text. Requests by email or phone
     are handled the same way. Aim for the same day, never more than 10
     business days.
   - After a stop request, send at most one confirmation, only within five
     minutes, and never with anything promotional in it.
5. **Test START** clears DND, since the Terms and STOP reply promise it.
   Ticking the box on the form again does *not* undo a STOP; only START does.
   Don't remove DND by hand.
6. **Quiet hours.** Send only 9 a.m.–8 p.m. Monday to Saturday and noon–8 p.m.
   on Sunday, in the recipient's time zone. That fits the federal 8 a.m.–9 p.m.
   window and the stricter state windows (FL, OK, MD: 8 a.m.–8 p.m.; TX: not
   before noon on Sunday).
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
| Opt-in confirmation | PROJECT: automate: You're subscribed to texts from Project Automate Inc. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help. | 160 |
| HELP reply | PROJECT: automate (Project Automate Inc.): For help, call (310) 402-4818 or email josh@projectautomate.com. Msg & data rates may apply. Reply STOP to opt out. | 158 |
| STOP reply (once only; no marketing) | PROJECT: automate: You are unsubscribed and will receive no further texts from us. Reply START to resubscribe. | 110 |

How each one gets sent:

- **Opt-in confirmation:** a workflow step straight after the form, for
  contacts who ticked the box. Manual Setup has one message field, "Opt-in
  Message" (the consent language shown to users): paste the checkbox wording
  from 2.2 there. If the wizard also shows HELP or opt-out message fields, fill
  them with the texts above.
- **HELP reply:** build a workflow: Customer Replied (SMS), message is HELP or
  INFO → Send SMS with the HELP reply.
- **STOP reply:** GHL sends its own when it sets DND.

Before submitting, text STOP, then START, then HELP from a real phone that
ticked the box, and screenshot each reply. If the STOP confirmation doesn't
name PROJECT: automate, or doesn't match the table, ask LC Phone support how to
set it, and use the text that's actually sent in the registration and Terms.

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
| Address | The street address on the CP 575. It must match the site: 1600 Rosecrans Ave Building 7, Suite 400, Manhattan Beach, CA 90266. If it doesn't, fix one of them first |
| Website | https://projectautomate.com/ |
| Business / support phone | (310) 402-4818 (same as the Terms, Privacy Policy and HELP reply) |
| Business / support email | josh@projectautomate.com (same as above) |
| Authorized representative | Joshua Trevithick (legal name), with his title, email and mobile number |

HighLevel checks that the contacts in the Terms and Privacy Policy match the
brand registration. Before running Review Application, set Settings →
Business Profile phone and email to (310) 402-4818 and
josh@projectautomate.com. The representative's personal number goes only in
the representative fields. The ban on VoIP and LeadConnector numbers there
applies only to Sole Proprietor brands.

### 4.2 Campaign use case

**Informational / Non-Marketing** (the client's decision, 2026-09-29). In GHL
this is a Standard campaign use case, at **$10/month** (Low Volume Mixed would
have been $1.50/month). **The use case can't be changed after the campaign is
created.** Sending promotional texts later means registering a new campaign
and adding a separate marketing checkbox and Terms section first.

Keep every text informational. That rules out:

- offers, discounts or seasonal specials
- newsletters and new-service announcements
- event invitations
- re-engaging old or cold leads
- referral requests

Replying to someone's own consultation request, including suggesting a time
for it, is fine. Carriers audit live traffic against the registered use case,
and promotional texts on an informational campaign can get the number
suspended.

### 4.3 URLs and content flags

| Field | Value |
| --- | --- |
| Privacy Policy URL | https://projectautomate.com/privacy-policy/ |
| Terms & Conditions URL | https://projectautomate.com/terms-and-conditions/ |
| Opt-in page | https://projectautomate.com/get-started/ (form inline on the page) |
| Embedded links | Yes (sample 4) |
| Embedded phone number | Yes (sample 2) |
| Age-gated / direct lending / affiliate marketing | No / No / No |

### 4.4 Campaign description

> Project Automate Inc. is a home technology integrator in Manhattan Beach,
> California, designing and installing smart home automation, lighting control,
> audio/video, outdoor lighting and audio, and security systems. We are doing
> DBA as PROJECT: automate. We text homeowners and clients who request a
> consultation through the form on our own website, projectautomate.com, and
> check an optional SMS consent box. The messages are informational only:
> replies to their inquiry, consultation scheduling, appointment confirmations
> and reminders, project and installation updates, and customer support. We do
> not send marketing or promotional messages. Messages are sent from our
> HighLevel (LeadConnector) CRM. The opt-in confirmation and appointment
> confirmations and reminders are sent automatically when a form is submitted
> or an appointment is scheduled. Our staff send inquiry replies, project
> updates and support messages through the CRM's conversation inbox. We do not
> buy, sell or share contact lists, and we do not send messages on behalf of
> any other business.

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
> Above the submit button is one optional, unchecked checkbox for
> non-marketing texts: replies to their inquiry, consultation scheduling,
> appointment confirmations and reminders, project and installation updates,
> and customer support. It
> names Project Automate Inc. (PROJECT: automate) and states that message
> frequency varies, message and data rates may apply, and to text HELP for help
> or STOP to opt out. The form can be submitted without checking the box, and
> only contacts who check it are texted. Links to our Terms
> (https://projectautomate.com/terms-and-conditions/) and Privacy Policy
> (https://projectautomate.com/privacy-policy/) appear directly below the
> checkbox. After opting in, the contact receives a confirmation text with
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
| 4 | Non-marketing | PROJECT: automate: Hi [First Name], ahead of your consultation on [Date], here is an overview of the [System] you asked about: https://projectautomate.com/lighting-control-systems/ Reply STOP to opt out, HELP for help. |

Links in real messages must use projectautomate.com, not bit.ly or other
public shorteners. GHL trigger links need a branded domain, or turn them off.

Before submitting, run HighLevel's **Review Application** (AI compliance
check). It crawls the opt-in page, Terms and Privacy Policy, and blocks
submission until required checks pass. Resubmitting a rejected campaign costs
nothing extra, but each round takes days, so fix everything first.

---

## 5. Open questions for the client

1. ~~Mixed or Informational?~~ Decided 2026-09-29: Informational only (4.2).
2. Is (310) 402-4818 the LC Phone number that will *send* the texts, or only
   the support line? If it sends, does it also take calls, or play a voicemail
   naming PROJECT: automate?
3. Is josh@projectautomate.com the single support email for the SMS program
   and the brand registration? The footer and other pages still show
   sales@projectautomate.com.
4. Should (310) 740-5375 stay anywhere else? It's still the main number in the
   header, next to the form on /get-started/, /schedule/ and
   /outdoor-lighting-audio/, in CTAs, the thank-you page, the 404 page,
   `public/llms.txt` and the JSON-LD schema. Decide **before submitting**:
   reviewers open the opt-in page (/get-started/), and HighLevel wants the
   site's contacts to match the brand registration. Showing (310) 402-4818 and
   josh@ there is the safest option.
5. The exact legal name, EIN and address on the CP 575 / 147C. Is
   "PROJECT: automate" a filed fictitious business name (DBA)?
6. Which GHL sub-account will own the form and the number permanently, and
   will the move happen before registering?
7. Are numbers collected any other way (Meta Instant Forms, calls, signed
   proposals, in person)? The Terms and the campaign say people join **only**
   through the website checkbox. Until another method is added to the Terms'
   "How you opt in", the campaign's opt-in method and the message flow (4.5),
   text only people who ticked the website box. That includes existing clients
   who'll get installation updates.
8. Is any lead data shared outside the company (subcontractors, manufacturers,
   design partners)? Have lead lists ever been bought or imported?
9. OK to remove the Meta Pixel from the GHL form for now (2.3)?
10. Is counsel OK with the 18+ clause, California governing law with a Los
    Angeles County venue, and the no-sharing promise?
11. Did Project Automate Inc.'s gross revenue for 2025 exceed $26,625,000? If
    so, the CCPA applies now. The Privacy Policy would then need CCPA sections:
    - rights to know, delete and correct, and how to submit requests
    - retention by category
    - non-discrimination

    The form would also need a notice at collection.

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
- **2026-07-30:** HighLevel's current guide requires:
  - optional, unticked checkboxes that name the campaign's own message types.
    The template shows two boxes (marketing and non-marketing). HighLevel's
    rejections article accepts a transactional-only sender that says so in its
    campaign description (see 2.1 item 3).
  - links inside the form
  - the DBA visible on the site
  - policy contacts that match the brand registration

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
