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
export const ghlFormEmbedScript = 'https://link.msgsndr.com/js/form_embed.js';
export const ghlTrackingScript = 'https://link.msgsndr.com/js/external-tracking.js';
