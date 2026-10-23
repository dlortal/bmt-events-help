---
title: "How to Create and Edit a Branch"
summary: "The Events platform enables Admins to build Events under different “Branches”. This can be utilised to streamline activity happening across an organisation."
category: support
order: 100
date: 2024-11-12
updated: 2026-08-10
status: published
wordpress_id: 1331
---

The Events platform enables Admins to build Events under different “Branches”. This can be utilised to streamline activity happening across an organisation. For instance, creating a Branch per location (New York) or per category (Awards).

When building a new Branch, Admins will need to define a comprehensive series of settings and parameters that will underpin how it functions.

Several different functionalities will be set at a Branch level, including Admins, Email Templates, Ticket Types, User Types, Venues and Auditoriums.

1.  **Log in** to the **Admin interface** of Events.
2.  Select **SControl centre** from the left-hand menu tabs.
3.  Select **Branches** from the page menu.
4.  **Navigate** to the **Actions menu** on the left hand side of the respective Branch, and select **Edit** from the drop-down menu. Alternatively, press the **green Add button** to create a new Branch.
5.  **Fill out** the following inputs:

### Basic Details

**Public Name** - input the Branch’s name. This will show externally to end Users when they register an account, or filter the Events List page. Examples could be location i.e. New York, or category i.e. Awards.

**Internal Name** - input the Branch’s internal name. This will only be shown to Admins and cannot be retrospectively edited once saved.

**Time Zone** - select the timezone from the drop-down list in which the Events will be held. This can be different per Branch.

**Display Event Time In 24 Hours Format** - select Yes or No to determine whether the Event’s timings should be displayed in 24 hour format. If Yes, Events will show in figures such as 14:00, 21:00.

**Default Venue Currency** - select the correct currency Events will be sold in via the drop-down list. Options include GBP, USD or EUR. This can be different per Branch.

**Events can Move Venue** - select Yes or No to determine whether Events can change Venue once created. Please note, Events with allocated auditoriums cannot be moved once tickets have been sold.

**Move Bookings Between Events** \- select Yes or No to determine whether bookings can be moved between Events.

**Events Quotas Apply to Admin Bookings** - select Yes or No to determine whether [Quotas](/help-articles/how-to-use-quotas/) should apply to [Admin Bookings](/help-articles/how-to-admin-book-tickets/).

**Skip Booking Confirmation Screen** - select Yes or No to determine whether the User should skip the booking confirmation screen at the end of their User journey. If Yes, the User will be taken straight to their My Bookings tab. This can be helpful when trying to encourage Users to fill in Guest Details.

**Public User Type** - select the relevant User Type a Public User should be assigned when autonomously registering for an account e.g. Public. [User Types](/help-articles/how-to-manage-public-user-types/) will need to be created before this can be selected.

**Visible** - select Yes or No to determine whether the Branch will be visible to end Users. If set to No, Users cannot register to this Branch and none of the Branch’s Events will be listed on the homepage. This can be useful if a particular department only hosts Events for VIP guests.

**Online Ticket Collection** - select Yes or No to determine whether Users will have to download their tickets during a set window, rather than have them emailed directly at point of booking. This can be useful for high profile Events, where the ticket design should be kept confidential til last minute.

**Display Ticket Design per Ticket Type** - select Yes or No to determine whether Admins can opt to set different Ticket Designs per Ticket Type. This is useful if some tickets are more expensive, or granted VIP access.

**Number of Alert Emails** , **Number of Alert Emails (24 hours)** & **Quiet Time** - for this input, please refer to this [guide](/help-articles/how-to-utilise-the-alert-list-feature/) for further instructions.

**Display Low/Limited Availability Tags** - for this input, please refer to this [guide](/help-articles/how-to-set-event-availability-tags/) for further instructions.

**Collect Accessibility Data at Point of Booking** - for this input, please refer to this [guide](/help-articles/how-to-request-accessibility-information-as-part-of-the-booking-process/) for further instructions.

**Show seat numbers to booker** \- lets admins control whether seat numbers are visible to bookers. If set to yes, Seat Number and Table Number columns now appear only on the Amend Booking page, defaulting to “–” until assigned from the Guest List by admins.

### Location Filtering

The Events platform uses branch and venue information to determine which locations appear in the filters on the Booker Entry List page. With the updated multi-location filtering system, users can now select several locations directly, without relying on the previous *Show All Events* toggle.

How filtering behaves depends on the type of user:

-   **Logged-in Users**  
    These users will see only the locations associated with their branch selected by default. They can select or deselect other locations as required.
-   **Public Users**  
    All locations will be selected on page load.
-   **Logged-out Users**  
    As with Public Users, all locations are selected by default.

#### **Adding New Locations to the Filter List**

Event locations shown in the filter are managed through venue settings. To add a new location:

1.  Navigate to the **Venues** page in the Admin area.
2.  Open the venue linked to the event.
3.  Scroll to the **Event Location Tags** section.
4.  Create or edit a tag in this field.

Any tag added here will appear as an available location in the filtering list for users.

### Display

**Featured Events** \- select Yes or No to determine whether Events can be marked as Featured on the homepage. Please see further instructions on this functionality [here](/help-articles/how-to-set-up-featured-events/).

**Event Tags** - select the green Add button to begin creating custom Tags that can be applied on a per Event basis. Please see further instructions on this functionality [here](/help-articles/how-to-create-custom-event-tags/).

### Terms and Conditions

6.  Select the **relevant T&Cs** from the Available column. These will be **applied to every Event** as they are set at the Branch level. T&Cs must be created first, via the steps in this [guide](/help-articles/how-to-create-edit-and-apply-terms-conditions/).

### Ticket Templates

7.  Select the green Add button to begin uploading and plotting a Ticket Design. These can then be selected by Admins when creating an Event.

### Suspension

8.  Select the green **Add New Suspension Rule button** to begin defining a User suspension policy. Please see further instructions on the functionality [here](/help-articles/how-to-suspend-bookers-who-regularly-miss-events/).

### Invoice and Payment

9.  Please review this [guide](/help-articles/how-to-setup-and-manage-the-different-payment-structures/) on the **different payment structures** in the Events platform.

### Stripe Config

10.  This field is hidden as a security measure. Please select either the **Change** or **Delete** options to **add/delete the Branch’s Stripe API Keys**. Admins will need to input both the Public and Private keys, and they can be different on a per Branch basis.
11.  Note, **the above step is essential** for Users to begin making bookings through the system. Even if most Events are priced at £0, Users will not be able to confirm their bookings without the Stripe API Keys set.

### Invoice and Receipt Template

12.  Follow the steps in this [guide](/help-articles/how-to-setup-and-manage-the-different-payment-structures/) on **how to upload and plot** Invoice, Receipt and Credit Note templates.
13.  **Review**, and ensure to **Save**.

**Note** - certain workflows are defined at the Branch level, including whether a Branch should be invoice or cash based.
