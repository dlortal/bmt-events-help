---
title: "How to Add and Manage CMS Translations"
summary: "The Events system supports branch-based translated CMS copy. Where translations have been provided, users can switch language using the language toggle shown across the site."
category: cms
order: 100
tags: ["cms","Languages","Translation"]
date: 2026-03-09
updated: 2026-08-05
status: published
wordpress_id: 1518
---

The Events system supports **branch-based translated CMS copy**. Where translations have been provided, users can switch language using the language toggle shown across the site.

Translations are managed per branch. For example, users accessing the **Wales branch** may see Welsh where it has been added. If a translation is not available for a page or branch, the platform will fall back to the **default English copy**.

## Before you start

-   You’ll need admin access to the BAFTA Events admin area.
-   Translations must be created and maintained in the CMS. If a translated version of the copy is not provided, users will see the default content.

## Enable translations in Configuration

**If you'd like to enable translations, please raise a Support Ticket, and BMT Support will enable this for you.** **Only a 'Maintainer' account can action this.**

Before adding translations, the feature must be enabled in the **Configuration list**.

1.  Log in to the **admin side of BAFTA Events**.
2.  From the menu to the left, select **Control Centre**.
3.  From the new menu, select **Configuration**.
4.  In the Name column, look for **Translation Languages**.
5.  Add a comma separated list of values. Please note that the values consist of two letters (BMT will have a list of languages and relevant language codes available).
6.  Save your changes.

Once enabled, translated CMS content can be provided for each branch.

**What Entrants will see on the UI:**

-   Entrants can access translation options using the **language selector in the top-right corner of the page**.
-   Clicking the **current language (e.g. “English” or **“**EN**”**)** opens a small pop-up menu.
-   The pop-up displays the **available language options (for example English, French, Spanish)**.
-   Entrants can **select a language from the list**, and the page content will automatically update to display the translated version where available.

## Add translations to an Event's copy

1.  Go to **Events > Edit**
2.  The system will present a list of options where a translation can be provided. For example, if you have English, French, Welsh enabled, you should be able to see a Text field for English, one for Welsh, one for French.
3.  Provide the relevant translations
4.  Click **Save & Close**

## Add or edit translations in the CMS

1.  From the menu to the left, select **Control Centre**.
2.  From the new menu, select **CMS**.
3.  Navigate to the **page or content item** you want to translate.
4.  In the left-hand column, select **Edit**.
5.  Update the relevant **translation fields**.
6.  Select **Save** or **Save & Close**.

## What you’ll see when editing a CMS item

When you open **Edit existing CMS**, the following fields are shown:

**Label / Key**  
Displays what the CMS item relates to (for example, *login button*).

**Global content**  
The default copy used across the platform unless a branch-specific version is provided.

**Branch content field (for example, “London content”)**  
This field is used to add translated copy for a specific branch. If completed, this content will be used instead of the Global content for users on that branch when the translated language is selected or available.

**Original**  
Shows the underlying CMS key or reference name.

## Action buttons

The following actions are available when editing CMS items:

-   **Back** – return to the CMS list without saving
-   **Activity Log** – view previous changes or edit history (if enabled)
-   **Save** – save changes and remain on the page
-   **Save & Close** – save changes and return to the CMS list

## Example

To translate the **“Login” button** text for a specific branch:

1.  Open the CMS item for the login button.
2.  Enter the translated text in the relevant **branch content field** (for example, the branch field).
3.  Select **Save**.

Users on that branch will see the translated version when the selected language is available. If no translation has been provided, the system will display the **default English text**.
