---
title: "How the Low and Limited Availability Tags Work"
summary: "The Display Low/Limited Availability Tags feature allows event admins to notify potential attendees when ticket stock is running low."
category: managing-an-event
order: 100
tags: ["Availability Tags","Tags","Tickets"]
date: 2025-03-17
updated: 2026-08-05
status: published
wordpress_id: 1347
---

**Display Low/Limited Availability Tags**

The **Display Low/Limited Availability Tags** feature allows event admins to notify potential attendees when ticket stock is running low. This helps create urgency and encourages faster ticket sales by making ticket availability more transparent.  
  
In our system, events are labelled with availability statuses: **Available**, **Low Availability**, **Limited Availability**, and **Sold Out**.

You can define when the **Low Availability** and **Limited Availability** tags appear by setting the percentage of tickets remaining.

The tags display in two colours:

-   **Low Availability** appears in **orange** when a set percentage of tickets have been sold.
-   **Limited Availability** appears in **red** when an even higher percentage is reached, signalling that only a few tickets remain.

These tags appear automatically on the event listing in the **Booker Interface** once configured, helping to drive ticket sales by highlighting scarcity. Below is a step-by-step guide on how to enable and customise these settings.

### **1\. Enabling Availability Tags**

To activate the availability tags, navigate to the **Admin Interface** and locate your event and open to settings, then locate **Display Low/Limited Availability Tags**.

Select **Yes** to enable the feature.

### **2\. Configuring Availability Thresholds**

After enabling the feature, you must set the percentages that determine when an event will be flagged as having **Low Availability** or **Limited Availability**.

#### **Low Availability Threshold**

-   This percentage determines when the event will be marked as "Low Availability."
-   For example, if you set **80%**, once 80% of tickets have been sold, the tag will appear on the event listing.
-   This signals to attendees that tickets are selling fast, encouraging early purchases.

#### **Limited Availability Threshold**

-   This percentage determines when the event will be marked as "Limited Availability."
-   If set at **90%**, the tag will appear once 90% of tickets are sold.
-   This further reinforces urgency, letting attendees know only a small number of tickets remain.

### **3\. How the Percentages Work**

The percentages are based on the total available tickets for the event. For example:

**Scenario:** An event has **1,000 tickets available**.

-   If **Low Availability** is set at **80%**, the tag will appear when **800 tickets are sold** (leaving 200 tickets).
-   If **Limited Availability** is set at **90%**, the tag will appear when **900 tickets are sold** (leaving 100 tickets).

These percentages can be adjusted depending on how you want to communicate urgency to potential attendees.

### **4\. Saving & Testing**

-   Once the percentages are set, review your settings and **Save & Close** to apply the changes.
-   To ensure the tags function correctly, you can use the **Admin Booking** feature to simulate ticket sales and verify that the tags appear at the correct thresholds.

**Note on Personalised Status Tags**  
In addition to the standard availability tags (*Available*, *Low Availability*, *Limited Availability*, *Sold Out*), users who have already booked their full allocation will now see the tag **Already Booked**. This replaces other tags for those individuals and ensures the event status reflects their own booking situation more accurately.

They’ll still be able to view the event and access the ticket page (where *Already Booked* is shown clearly), but they will no longer see misleading labels or receive the “Event Restricted” pop-up.

By correctly setting these thresholds, you can improve event visibility, drive ticket sales, and enhance the user experience.

For a full guide on setting up event availability tags at both the **Branch** and **Event** levels, refer to the official BAFTA Events Help article:  
[How to Set Event Availability Tags](/help-articles/how-to-set-event-availability-tags/)
