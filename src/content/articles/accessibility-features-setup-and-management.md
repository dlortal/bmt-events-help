---
title: "Accessibility Features: Setup and Management"
summary: "This guide explains how to configure and manage accessible seating, companion seats and accessibility communication workflows for events using allocated seating plans."
category: tickets
order: 100
tags: ["Accessibility","Accessible Seating","Tickets","Wheelchair Seats"]
date: 2026-02-06
updated: 2026-07-30
status: published
wordpress_id: 1516
---

This guide explains how to configure and manage accessible seating, companion seats and accessibility communication workflows for events using **allocated seating plans**. These tools help venues clearly present accessible options to bookers and ensure access requirements are delivered accurately to venue teams.

These features also introduce clearer seating plan visuals and more structured communication flows, helping to reduce booking errors and minimise manual follow-up for venue staff.

## What this setup allows you to do

Using these features, admins can:

-   Clearly identify wheelchair, flexible wheelchair and companion seats on seating plans (New, consistent seating icons are used across both the admin interface and seating plans, making accessible spaces easier to recognise and manage.)
-   Ensure companion seats are only booked alongside wheelchair spaces
-   Show guidance messages when accessible seats are selected
-   Automatically link accessible seats to accessibility information in the booking
-   Temporarily release flexible accessible seats as standard seats closer to the event
-   Control how accessibility selections are communicated and approved

## 1\. How to Set Up Accessible Seat Types

Accessible behaviour is controlled at **Seat Type level**. New icons have been added for Wheelchair space, Flexible Wheelchair seat, and Companion seat. These are new seat types, and within the system they work the same way as existing types (like triangle or square).

### How Admins can Set Up Accessible Seat Types

1.  Log in to the **Admin Interface.**
2.  Select **Venue** **Management** from the left-hand menu.
3.  Select **Seat Types** from the menu page.
4.  Click on the **Add** button if creating a new **Seat Type.**
5.  Choose the **Venue** from the dropdown
6.  Set a **Name** for your Seat Type
7.  Set a **Description** for your Seat Type, if relevant
8.  From the **Icon** options, you can choose:
    1.  **Wheelchair -** Once created, this seat must be correctly tagged within the seating plan and linked to the relevant accessibility options. See the guide on tagging accessibility within the seating plan [here](/help-articles/how-to-request-accessibility-information-as-part-of-the-booking-process/).
    2.  **Companion**
    3.  **Flexible Wheelchair -** As with the Wheelchair Space option, accessibility options must be set up in the seat plan and approved for this seat type.
9.  Choose a **Seat Colour**
10.  Click **Save**

### How to Configure Wheelchair Seat Types

Wheelchair Seat Types are displayed to Users with a wheelchair icon. To allow a Companion seat to be booked with it a Wheelchair Seat Type, you’ll need to:

1.  Ensure a **Companion** Seat has been created
2.  Go to the **Wheelchair** Seat Type
3.  From **Allow Additional Companion seat** dropdown, select **Companion**

**Booker Experience:**  
When a booker selects the accessibility requirements option, they are asked to provide basic details and are shown the accessibility seat types you have configured (such as **wheelchair spaces**). They choose the option that matches their needs before proceeding. In the seating plan, only seats that meet those selected requirements are available to book, while others appear greyed out. When an eligible seat is selected, a message confirms the type of accessible seat chosen, and any configured companion seat options will also appear where applicable, at no additional charge.

### How to Configure Companion Seat Types

Companion Seats are displayed to Users with a C icon. Companion seats must be created in exactly the same way as any other seat type. Please note that, Companion Seats:

-   Cannot be selected on their own by bookers, as they are booked in addition to the main seat (e.g. Wheelchair)
-   They only become available after a wheelchair space is selected
-   If no wheelchair space is in the basket, companion seats appear unavailable
-   Should **not** be tagged with an accessibility option in the seating plan. Doing so will cause conflicts.
-   Do not count towards quotas
-   Are excluded from payment rules

**When a booker selects the Companion seat option, the seating plan should automatically adjust to guide them.**

-   Only **Companion seats** should be highlighted as available.
-   All other seat types should appear **greyed out or faded**.
-   Greyed-out seats should **not be clickable or bookable**.

This helps ensure the booker can only select seats that match the Companion booking type and avoids incorrect seat selections.

**What happens if a user selects Companion and then changes their mind? Can they go back?**

If a user selects the Companion option but decides not to proceed with it, they should be able to:

-   Remove the companion seat before completing the booking.

or

-   Remove the companion seat via the My Bookings page.

This means the seat availability should dynamically update based on the booking type selected.

**What happens if no Companion seats are booked for a screening?**

Companion seats should remain controlled by their seat type rules.

-   If no Companion seats are selected, they will automatically be added back to seating plan as a bookable companion seat.
-   They should **remain unavailable to users who have not selected the Companion option** (or who do not meet the access criteria, depending on configuration).

This ensures Companion seating remains reserved for accessibility-related bookings and is not released as general inventory unless explicitly reconfigured.

### How to Configure Flexible Wheelchair Seat Types Details

Flexible Wheelchair are displayed to Users with a wheelchair and standing person icon. A flexible wheelchair space can function as:

-   A standard seat, or
-   A wheelchair space (where the seat may be removed)

This is commonly used in venues where certain seats can be physically removed or where demand for wheelchair positions varies by event.

Bookers selecting these spaces can confirm whether the seat should remain or be removed via the edit ticket details options in the bookings page.

These seats use the same companion seat and accessibility logic as standard wheelchair spaces and must be tagged with the appropriate accessibility requirements within the seating plan.

## 2\. How to Add On-Screen Guidance for Accessible Seats

Admins can configure modal messages that appear when a User selects a seat with an Accessibility option not included in their booking. These messages gently encourage Users to choose seats they need only when suitable alternatives are available. They are advisory rather than restrictive, and users can choose to continue if required.

### Path (Admin)

1.  Log in to the Admin Interface.
2.  Select **Venue Management** → **Auditoria**.
3.  Locate the auditorium and select **Edit**.
4.  Scroll to **Accessibility Settings**.
5.  Set **Display Accessibility Message on Seating Plan** to **Yes**. Please fill out the relevant options as required, or leave blank where no message is required:
    1.  **Messaging for BSL interpretation Accessible Seat Options** \- this will be displayed when a Seat has been tagged as BSL Interpretation, but the Booker hasn’t included this option in their booking
    2.  **Messaging for Captioning Accessible Seat Options -** this will be displayed when a Seat has been tagged as Captioning, but the Booker hasn’t included this option in their booking
    3.  **Messaging for Stair-free Access Accessible Seat Options -** this will be displayed when a Seat has been tagged as Stair-free Access, but the Booker hasn’t included this option in their booking
    4.  **Messaging for Wheelchair Accessible Seat Options -** this will be displayed when a Seat has been tagged as Wheelchair Accessible, but the Booker hasn’t included this option in their booking
6.  Select **Save**.

### Booker experience

-   Pop-up Messages appear immediately after selecting an accessible seat tagged with one of the options above (BSL, Captioning, Stair-Free Access, Wheelchair)
-   Multiple messages are grouped into one pop-up
-   Messages only display where content has been provided
-   The pop-up titled **“Accessible Seat”** displays the accessibility messaging options tagged to the seat (e.g. stair-free access, captioning, and BSL interpretation) along with two buttons at the bottom: **Cancel** and **Continue**. Choosing **Cancel** returns the user to the seating plan, while **Continue** marks the seat as selected and causes an **Add to basket** button to appear on the right alongside the seat and ticket details.

This helps set expectations early and reduces follow-up queries.

## 3\. Accessibility Reconfirmation during Checkout

After seat selection, accessibility information is automatically tied to tickets. This behaviour is automatic once seat types are configured and requires no additional setup. At a high level, the User journey is:

-   Choose booking options
-   Select seats
-   Review and confirm the booking

On the basket/checkout page:

-   Wheelchair spaces have a fixed selection and cannot be changed.
-   Flexible wheelchair spaces include a setting that determines whether the seat is removed or remains available.
-   Companion seats are hardcoded as Essential Access Companion seats.

This information is passed through to venues and admins to support planning and delivery.

### Admin visibility

This data feeds into:

-   Booking records e.g. Events Bookings page and All Booking page
-   Access reporting - If set up via branches (scroll further down to find this) Admins can be immediately informed via email when an accessible booking has been made.
-   Accessibility communication workflows  
    

## 4\. How to Configure Accessibility Communications (at a Branch Level)

Accessibility communication behaviour is set at **branch level**. These settings control what happens after a booker selects an accessibility option, who is notified and whether approval is required.

### Path (Admin)

1.  Log in to the admin interface.
2.  Select **Control Centre** → **Branches**.
3.  Edit the relevant branch.
4.  Scroll to **Accessibility Communication Workflows**.
5.  The system offers a set of accessibility options, each with its own communication settings. When an option is enabled for an event, admins can choose which notifications they receive when a booking includes accessibility requirements. The available accessibility options are:
    1.  **Wheelchair Accessible**
    2.  **Stair-free Access**
    3.  **Captioning**
    4.  **BSL interpretation**
    5.  **Quiet space**
    6.  **Any other adjustments**
    7.  **Accessibility Requires Approval Message**
6.  For each Accessibility option, Admin can select which workflow is required. Options include:
    1.  **Required approval**
    2.  **Alert admins only**
    3.  **No messaging required**

Please **note** \- approval workflows indicate that accessibility arrangements may need to be reviewed outside the system. If using approval:

-   Enter text in **Accessibility Requires Approval Message**.
-   Any text entered here will be included in the booking/accessibility requested email, provided the email template contains the `@@accessibility_confirmation@@` placeholder. Any admins included in the BCC of this email template will also receive the notification. If no admins are directly specified, the event creator admin will receive the email by default. The accessibility request will also be visible on the bookings page. This placeholder automatically inserts the text from the **Accessibility Requires Approval** message into the email. More details on how to set up this template can be found below.
-   Depending on the workflow selected, the booker may also receive an accessibility information email using the `booking/accessibilityInfo` template. This email can include the accessibility options selected for the booking. More information on configuring this template can be found in section 6 below.

5.  Select **Save**.

These improvements ensure booking confirmations clearly reflect whether accessibility is confirmed or requires approval.

## 5\. How to Set Up Emails for Admins when an Accessible Booking is Requested

For Admins, when an accessible booking is made, if the option has been enabled on a branch level to inform them of this, then the `booking/accessibilityrequested` is triggered.

### How to Set Up an Email For Admins when an Accessible Booking is Requested

1.  Log in to the admin interface.
2.  Select **Email & Comms** from the left-hand menu.
3.  Select **Email Templates** from the menu page.
4.  Locate the template **booking/accessibilityrequested** in the list.
5.  You can use your browser search (Ctrl + F) to find it more quickly.
6.  If the template contains the `@@accessibility_confirmation@@` special value, this placeholder automatically inserts the text from the **Accessibility Requires Approval** message into the email at a Branch level.
7.  If the template contains the @@approval\_status@@ special value, it will automatically insert the current approval status, letting admins know whether the request requires approval.

On **My Bookings**, for Users, accessibility tags display only where approval is required.

6\. How to Set Up the Accessibility Information Email for Bookers

When a booking includes one or more accessibility options, an additional accessibility information email can be sent to the booker.

This email uses the `booking/accessibilityInfo` template and is sent in addition to the standard booking confirmation email.

The timing of the email depends on the Accessibility Communication Workflow configured for the relevant branch. It will either be sent after the booking confirmation or after any accessibility options requiring approval have been approved.

## ***6\. How to Configure the Accessibility Information Email***

1.  Log in to the admin interface.
2.  Select **Email & Comms** from the left-hand menu.
3.  Select **Email Templates** from the menu page.
4.  Locate the `booking/accessibilityInfo` template in the list.
5.  You can use your browser search function, **Ctrl + F**, to find it more quickly.

The template can contain the following special value:

`@@accessibility_options@@`

This special value automatically inserts the accessibility options selected for the booking into the email.

6\. Edit the template content as required and select **Save**.

## 7\. Managing Accessible Bookings After They Are Made

Once an accessible booking has been completed, what happens next depends on whether the selected accessibility option is configured at branch level as:

-   **Required approval**
-   **Alert admins only**
-   **No messaging required**

This section explains what Admins can see and do, and what Users experience in each case.

### When an Accessibility Option **Requires Approval**

#### What happens for Admins

If an accessibility option linked to the booking is set to **Required approval** at branch level:

**Email notification**

-   Admins receive the **booking/accessibilityrequested** email.
-   This email includes:
    -   Booking details
    -   Accessibility options selected
    -   The **Accessibility Requires Approval Message** (if configured)
    -   The user names and email (via the `@@special values@@` placeholder, if present in the template)

**How this appears in the Booking record**

Within the Admin interface:

-   The booking appears as normal in:
    -   Events → Bookings
    -   All Bookings
-   The booking will include **accessibility indicators** within the booking details, showing:
    -   Which accessibility options were selected
    -   That the request is **pending approval** (where approval workflows are active)

This ensures the booking is clearly identifiable as requiring accessibility review, even if the original email is no longer to hand.

**Can Admins approve in the system?**

Where accessibility approval is enabled, admins can approve directly within the booking.

### Step-by-step

1.  **Locate the booking**
    -   Go to **Events → Bookings** or **All Bookings** (from the Events dropdown).
    -   Find the relevant booking in the list.
2.  **Identify bookings needing approval**
    -   Bookings that include an accessible ticket requiring approval are:
        -   Highlighted in **red**
        -   Labelled to indicate that an accessible ticket requires approval
        -   Showing the number of tickets on the booking
3.  **Open ticket details**
    -   Use the **Action** menu on the left of the booking.
    -   Select the option to view **Ticket Details**.
4.  **Review accessibility information**
    -   On the details page, review:
        -   Ticket details
        -   The stated accessibility requirements
5.  **Approve the requirement**
    -   Below the ticket table, select **Approve Accessibility Requirement**.
    -   A confirmation pop-up will appear:  
        *“Are you sure you want to approve accessibility requirement?”*
    -   Click **OK**.
6.  **Confirmation**
    -   The booking will now be highlighted in **green**, indicating that the accessibility requirement has been approved.

####   
What happens for Users

**Immediately after booking**

-   The User completes checkout as normal.
-   Their booking is created successfully.
-   Where approval is required:
    -   Accessibility tags on **My Bookings** indicate that the request is subject to approval.
    -   Messaging shown during checkout and via email (depending on template setup) makes clear that accessibility arrangements are not yet confirmed.

**Emails**

-   The User receives their standard booking confirmation email.
-   If your confirmation or accessibility templates include approval messaging placeholders, this email can:
    -   Explain that accessibility arrangements are pending review
    -   Include the Accessibility Requires Approval Message text

**Once approved**

-   After Admins confirm arrangements (and, where supported, update approval status in the system):
    -   Approval status in the booking record updates

This ensures Users understand the difference between a confirmed booking and confirmed accessibility arrangements.

###   
When an Accessibility Option **Does Not Require Approval**

This applies where the branch workflow is set to:

-   **Alert admins only**, or
-   **No messaging required**

#### What happens for Users

-   The booking is **fully confirmed at checkout**.
-   Accessibility selections are automatically tied to the tickets.
-   The User receives the standard booking confirmation email.
-   No “pending approval” state is shown, as arrangements are treated as confirmed.

From the User perspective, the journey is the same as a standard booking, with accessibility information included as part of the ticket data.

####   
What happens for Admins

**Email notification (if enabled)**

-   If the option is set to **Alert admins only**, the booking/accessibilityrequested email is still triggered.
-   This is for awareness and operational planning only — no approval step is expected.

**How this appears in booking lists**

In the Admin interface:

-   The booking appears in Events → Bookings and All Bookings as normal.
-   Accessibility selections are still visible within the booking details.
-   There is **no pending approval state**, but the booking remains identifiable as an accessible booking via:
    -   The accessibility options attached to tickets
    -   Accessibility reporting (where configured)

This allows venues to prepare appropriately without adding additional workflow steps.
