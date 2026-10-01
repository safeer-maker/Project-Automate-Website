// GoHighLevel (GHL) integration — the lead form and the visitor-tracking script.
//
// IMPORTANT: the form and the tracking ID belong to the SAME GHL sub-account.
// These values currently point at a TEMPORARY sub-account. When moving to the
// permanent one, update formId/formName/formHeight AND trackingId together —
// changing only the form leaves tracking reporting to the old sub-account, and
// GHL can no longer tie a visitor's page history to their form submission.
// Get both from the new sub-account: Sites → Forms → (form) → Integrate, and
// Settings → External Tracking.

export const ghl = {
	formId: '1k0f27S2E7AnT195u3ly',
	formName: 'ProjectAutomateLP-Form - Website',
	/** Initial iframe height in px, from GHL's embed code; form_embed.js resizes it after load. */
	formHeight: 1238,
	trackingId: 'tk_9d37ae1b083b4d7f96de4bc2b7f4e6b0',
};

export const ghlFormUrl = `https://api.leadconnectorhq.com/widget/form/${ghl.formId}`;

// GHL booking calendars (Calendars → (calendar) → Share → Embed code), served
// from the studio's own links.projectautomate.com domain. Each calendar has
// its own page so its URL can be shared on its own:
//
// - consultation: the public booking link, at /schedule/. For visitors who
//   arrive from outside the site (Google Business Profile, email signatures,
//   directories): they see the studio's availability and give their details
//   in the calendar's own form, in one step.
// - inResidence: the in-residence consultation, at /schedule/in-residence/
//   (noindex). A senior specialist meets the client at their home, walks it
//   with them and shares completed work. Not linked on the site; the GHL
//   automation sends a contact there once the consultation form is submitted.
//
// NOTE: these calendars must sit in the same sub-account as `trackingId`
// above, or bookings can't be tied to the visitor's page history.
export const ghlCalendars = {
	consultation: { id: '073T0gB9DGXALoeGcQuN', title: 'Private consultation booking calendar' },
	inResidence: { id: '5zoC3ppxdGURWHcdmufT', title: 'In-residence consultation booking calendar' },
} as const;

export const ghlCalendarUrl = (id: string) => `https://links.projectautomate.com/widget/booking/${id}`;
export const ghlFormEmbedScript = 'https://link.msgsndr.com/js/form_embed.js';
export const ghlTrackingScript = 'https://link.msgsndr.com/js/external-tracking.js';
