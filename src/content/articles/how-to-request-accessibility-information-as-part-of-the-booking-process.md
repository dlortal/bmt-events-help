---
title: "How to Request Accessibility Information as Part of the Booking Process"
summary: "BAFTA Events includes a robust feature set that enables Admins to gather attendees' Accessibility requirements seamlessly during the booking process."
category: tickets
order: 100
date: 2024-09-17
updated: 2026-07-15
status: published
wordpress_id: 1296
---

BAFTA Events includes a robust feature set that enables Admins to gather attendees' Accessibility requirements seamlessly during the booking process. This feature is designed to ensure that all Users, particularly those with specific adjustments, can provide the necessary details directly within the system, eliminating the need for external communication via calls or emails. By integrating this functionality, we aim to create a more inclusive booking experience where all attendees feel supported and confident that their needs will be met upon arrival. This feature addresses a significant barrier that often discourages individuals with specific accessibility needs from attending events.

The functionality is versatile and can be selectively applied to individual Events, offering flexibility to Admins. The setup process allows for granular requirements to be defined for each Seat or Space within an Auditorium, as well as for the Venue as a whole. This granular approach provides Admins with the flexibility to determine in advance whether specific requirements can be accommodated. The functionality is particularly designed to support multi-use spaces within an Auditorium, such as a flexible wheelchair space where a seat can be removed if needed. This space can be sold as either a seat or a space, with Admins being alerted via Email upon Booking completion, ensuring they are aware of the requirement in advance. Additionally, this information can be relayed directly to the Venue, and a signoff process allows Bookers to have confidence that their needs will be supported. Admins can also sensitively reach out to attendees in advance to offer support or explain why a request cannot be accommodated.

## Allocated and Unallocated Auditoriums

The two main processes, which differ in terms of setup and operation, are for **Allocated** and **Unallocated** events. Additionally, there is a separate process for events with **Pending Bookings**, where accessibility requirements can be provided on a per-ticket basis after the booking has been approved.

This guide outlines the steps for setting up and utilising the various options available within this functionality. As always, the features are designed to integrate seamlessly into your workflow but can be easily disabled if not required. Follow the guide to determine how best to incorporate each feature into your administrative processes, allowing you to tailor the functionality to suit your specific needs.

As a default the following accessibility options have been created.

-   **Any other adjustments** - allows attendees to provide specific information related to their circumstances.
-   **BSL Interpretation**
-   **Captions**
-   **Quiet Space**
-   **Stair-free Access**
-   **Wheel Chair Accessible**

If you require additional options please create a support ticket to request these and we can discuss the work required to add them.

## How to enable the Accessibility functionality

The functionality is available on all instances but as a default its switched off. It is configurable on a per Branch basis, but in order to appear for an Event please follow these instructions:

1.  Log into the **Admin Interface**
2.  Go to **Control Centre** and click on **Branches**
3.  Click Edit for the relevant **Branch**
4.  Set **Collect Accessibility Data at Point of Booking** to **Yes**
5.  Click **Save**

Actioning this will enable all of the Accessibility functionality for the branch which will be used in further sections.

## How to set up the Admin Notification Feature

The Admin Notification Feature automatically triggers an email to Admins when an Accessible Booking is completed, including any specified accessibility requirements. The User Interface informs the Booker that their request requires Approval, and both emails and on-screen CMS notifications are updated to reflect this messaging. Within the Admin interface, visual notifications will alert Admins to view and approve these requests.

It is important to note that there is no automated rejection process for Accessibility Requests. This decision was made deliberately to ensure that any discussions regarding such requests are handled personally, rather than through an impersonal automated system that could be perceived as insensitive. Therefore, any necessary conversations with the booker should take place outside of the system.

1.  Log into the **Admin Interface**
2.  Go to **Control Centre>Configuration**
3.  Click **Edit** for the Accessibility Email Send Options
4.  On the next page check the **Accessibility Options** that admins wish to be notified about when a booking is made
5.  Click **Save**

Once the trigger for the notification has been completed you will need to set up the Email Template. More information for the generation and editing of email templates can be found [here](/help-articles/how-to-set-up-branch-email-templates/):

1.  Go to **Email & Comms**
2.  Search for the **booking/accessibilityRequested** template
3.  Click **Edit** on the relevant template
4.  Set **Enabled** to **Yes**
5.  Set the **Add** emails to queue in this state to **New**
6.  In the **BCC** field specify the email addresses which should receive the emails
7.  Check the **Send to BCC Only** box, as this will prevent the email being sent to the booker
8.  Enter the **Subject**
9.  Provide email copy for the admin users in the **Content** field which should detail the required actions for admin users. Make sure the value @@basket\_accessibility\_tickets\_email\_data, site@@ is included as this will list the booking details.

**Note** \- the actions to Approve the Booking will be defined below.

## How to Set-Up an Accessible Event

Setting up accessible events closely follows the standard event setup procedure. This section will focus on the specific options required for accessible bookings.

Both Allocated and Unallocated events are configured within the Auditorium section. When setting up allocated booking auditoriums, there is an additional step that significantly alters the booking experience for attendees. This step will be covered in detail below as an optional configuration.

**Note** \- this guide assumes that all relevant [Venues](/help-articles/how-to-create-and-edit-venues/) and [Seat Types](/help-articles/how-to-create-and-edit-seat-types/) have been created.

1.  Log into the **Admin Interface**
2.  Go to **Venues Management>Auditoria**
3.  Edit or Add a new Auditorium
4.  Complete all sections as necessary, if you need more information review the [Auditorium Guide](/help-articles/how-to-build-auditoria-in-the-system/).
5.  Select the boxes for the **Accessibility Options** that will be selectable for users as part of the booking process. These are the options that can be linked to individual seats or selected by bookers for unallocated events.
6.  To allow bookers to filter events by accessibility check the relevant boxes for the **Accessibility Filter on Events List** option. This will display a filter on the events list page but will not pertain to the booking process. This is an optional feature.
7.  Click **Save**

If the auditorium is for allocated seating then you will need to tag the individual seats with the relevant accessibility options. For full information about creating seating plans see the [Seating Plan guide](/help-articles/how-to-build-seating-plans/).

1.  Go to **Venues Management>Auditoria**
2.  Edit or Add a new Auditorium
3.  Complete all sections as necessary, if you need more information review the [Auditorium Guide](/help-articles/how-to-build-auditoria-in-the-system/).
4.  Click on **Edit Seat Plan**
5.  When adding or editing a seat there is a section for. Check the options that the seat supports. Note that **Quiet Space** and **Any other adjustments** do not pertain to a seat, so are not available to select here.
6.  Click **Save** when the required updates have been made

**Note** \- the seating plan can be updated at any time.

## How Admins Can to Review and Approve Accessibility Requests

In the section above it was detailed how to setup an email which is triggered to admins based on specific criteria that needs to be approved. If an event has been set up where accessibility criteria needs to be approved then admins will need to action this for each booking that meets the set criteria.

1.  Log into the **Admin Interface**
2.  Go to **Events List**
3.  On the events list if there are bookings that require approval there will be a message below the event title which states **X accessible booking requires approval**
4.  In the Actions menu select Bookings
5.  On the Booking List there is a filter in the second column which can be used to identify the bookings
    1.  Requested - accessible bookings that require approval by admins
    2.  Approved - accessible bookings already approved by admins
6.  Locate the relevant bookings and in the Actions Menu select Details
7.  On the details page all of the details requested for each ticket are displayed in the table
8.  Admins can Approve the accessibility requirement on a per booking or per ticket basis by the actions menu for each ticket or the button on the page for the whole booking.
    1.  Tickets that require approval will appear red
9.  Approving the booking or each ticket will turn the row green. No email will be triggered to the user by approving a ticket or the whole booking. Once the whole booking has been approved the UI tag on the bookers My Booking page will change from Accessibility Requested to Accessibility Confirmed

**Note** - there is no rejection process or approval email as accessibility needs to be handled with a level of consideration for the bookers and its been decided that this should be a manual process outside of the system.

## Process for Bookers

BMT do not provide documentation for front end users but so that admins can fully understand the process we have briefly captured the workflow for bookers:

### Unallocated Events

-   The process is the same until the booker reaches the ticket select page
-   After the user specifies the number of tickets they require there is an checkbox which can be check to provide accessibility requirements
-   The accessibility requirements are provided by the booker on a per ticket basis
-   After the booker clicks **Book Tickets** the requirements can not be amended. To make updates the booker will need to cancel tickets and book new
-   The selected requirements will be displayed on the basket page
-   Once the booking is complete they can see if their requirements require approval on the My Bookings page
-   The requirements are also displayed on the Amend Booking Page

### Allocated Events

-   The process is the same until the booker reaches the ticket select page
-   After the user specifies the number of tickets they require there is an checkbox which can be check to provide accessibility requirements
-   The accessibility requirements are provided by the booker on a per booking basis
-   After the booker clicks **Select seats** the seating plan will highlight any seat that meets one or more of the requirements specified for the booking
-   Bookers can select any seats and are not limited to the highlighted seats and then proceed to the basket page
-   From this point the seats can not be amended. To make updates the booker will need to cancel tickets and book new
-   The booker needs to confirm the required accessibility requirements on the booking page for them to be included as part of the booking
-   Once the booking is complete they can see if their requirements require approval on the My Bookings page
-   The requirements are also displayed on the Amend Booking Page

## CMS to be updated

Ticket Select Page

-   Accessibility requirements title
-   Accessibility select question with checkbox
-   Booking page accessibility text allocated
-   Booking page accessibility text unallocated

Seating Plan page

Note all copy here is hardcoded so please ask BMT to update

-   Message to users where one or more of their requested accessibility options is not available:
    -   Title - Accessibility check
    -   Message - Unfortunately the remaining seats available will not match all of the criteria you selected. Please review the seats and continue with your booking or contact [events@bafta.org](mailto:events@bafta.org) if you have any questions.
    -   Buttons - Okay/Cancel

Basket Page

-   Accessibility requirements title
-   Message to users if the accessibility they select on the Basket Page differs from the original selection:
    -   Title: Please ensure that you select the required accessibility options
    -   Message with checkbox: **Continue without selecting required accessibility options**
    -   Buttons: Continue/Cancel
-   Message to user if they select Any other adjustments but do not provide copy
    -   Please provide your accessibility adjustments
    -   Okay button

My bookings page

-   Accessibility Confirmed tag
-   Accessibility Requested tag

Amend Booking Page

-   Ticket Accessibility selected intro
-   Accessibility Requirments
