---
title: "How to Cancel an Event"
summary: "This article explains how to formally cancel an event using the new cancellation workflow."
category: managing-an-event
order: 100
tags: ["Cancel","Cancel Event","Cancel Tickets"]
date: 2025-06-04
updated: 2026-08-06
status: published
wordpress_id: 1398
---

This article explains how to formally cancel an event using the new cancellation workflow. Cancelling an event through this process ensures that all bookings are marked as cancelled, attendees are notified, and the event is clearly shown as cancelled in the admin interface and public event page.

**Note:** This process does not automatically issue refunds. Any refunds must be processed separately.

During cancellation, Admins can include a custom cancellation message, which is automatically inserted into the cancellation email sent to bookers.

## Why use the cancellation workflow?

Previously, cancelling an event involved deleting or hiding it and manually contacting bookers. This often caused confusion and extra admin work. The new workflow introduces a clear **"Cancelled"** status for events and ensures that key actions—like notifying attendees—are handled consistently.

## Cancelling an event

To cancel an event, follow the steps below:

1.  **Log in** to the **Admin side** of BAFTA Events.
2.  Select **Events List** from the left-hand menu tabs.
3.  Navigate to the event you wish to cancel.
4.  From the right side of the Event, click on the **Actions** menu.
5.  Choose **Cancel Event** from the dropdown.
6.  **Review the Confirmation Modal**  
    A modal window will appear with the following information:
    -   The event name and ID.
    -   A warning that this action is irreversible.
    -   Details of what will happen when you proceed:
        -   All existing bookings will be marked as cancelled.
        -   An email will be sent to all bookers using the **event/cancelled** template.
        -   Paid tickets will **not** be refunded.
    -   A free-text box labelled **Event Cancel Message**. This message will:
        -   Be included in the cancellation email.
        -   Be displayed on the public event page in place of the booking button.
        -   **Not be editable after submission.**
    -   **Important:** To ensure the cancellation message appears in the email, the `@@event_cancel_message@@` placeholder must be included in the **event/cancelled** email template.
7.  **Fill in the Confirmation Box**  
    You must confirm that you understand the action is irreversible by filling in the **"I am sure"** box.
8.  **Complete the Action**  
    Click **Continue** to proceed or **Cancel** to exit without making changes.

Once submitted, a confirmation message will appear confirming that the event has been cancelled.

## What happens after cancellation?

Once the event has been cancelled:

-   All bookings are automatically marked as **Cancelled**.
-   Attendees receive a cancellation email with the cancellation message you provided automatically included.
-   The booking button is removed from the public event page.
-   Your cancellation message is shown in red on the public event page.
-   A red **“Cancelled”** tag appears on the event in the admin interface.
-   In the Events List:
    -   The event row is highlighted in red.
    -   **“Event Cancelled”** is displayed beneath the title.

**Important:** Refunds are not handled as part of this workflow and must be managed manually.  
If you are unsure how to process a refund, please refer to the \[[Refunds guide](/help-articles/how-to-setup-and-manage-the-different-payment-structures/)\] or contact the finance team.

## Additional notes

-   The **Cancel Event** option is only available for events that have not already been cancelled.
-   If you need to edit or amend an event after it has been cancelled, you will need to duplicate the event and start again.
-   Waitlist and alert list (WL/AL) users will not be notified directly unless they had active bookings at the time of cancellation.

If you need further assistance, please contact the Events team or raise a ticket via the support portal.
