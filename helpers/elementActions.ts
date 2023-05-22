import { TIMEOUT_L, TIMEOUT_S, TIMEOUT_XXS } from "./Constants";

const SELECTORS = {
    ANDROID_LISTVIEW: '//android.view.ViewGroup/android.widget.LinearLayout[2]',
    IOS_PICKERWHEEL: '-ios predicate string:type == \'XCUIElementTypePickerWheel\'',
    DONE: '~done_button',
};

class ElementActions {

    //Click on any element
    public async ecommClickElement(elementpath, waitTimeOut: number = TIMEOUT_S ) {
        await elementpath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(await elementpath).toBeDisplayed();
        await (await elementpath).click();
    }

    //Clear Textbox
    public async ecommClearInputText(elementpath, waitTimeOut : number = TIMEOUT_S) {
        await elementpath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(await elementpath).toBeDisplayed();
        await elementpath.clearValue();
    }

    //Input text on any textbox
    public async ecommInputText(elementpath, inputText, waitTimeOut : number = TIMEOUT_L) {
        await elementpath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(await elementpath).toBeDisplayed();
        await elementpath.clearValue();
        await elementpath.setValue(inputText);
    }

    //Get text
    public async ecommGetText(elementpath, waitTimeOut : number = TIMEOUT_S): Promise<string> {
        await elementpath.waitForDisplayed({ timeout: waitTimeOut });
        const elementText = await ((await elementpath).getText());
        return  elementText;
    }

    //Get text and compare exact text
    public async ecommGetTextAndCompareExactText(elementpath, expectedtext, waitTimeOut : number = TIMEOUT_S) {
        await elementpath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(await elementpath).toBeDisplayed();
        await expect(await elementpath.getText()).toEqual(expectedtext);
    }

    //Get text and compare partial text
    public async ecommGetTextAndComparePartialText(elementpath, expectedtext, waitTimeOut : number = TIMEOUT_S) {
        await elementpath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(await elementpath).toBeDisplayed();
        await expect(await elementpath.getText()).toContain(expectedtext);
    }

    //Wait till element is displayed
    public async ecommWaitUntilElementIsDisplayed(elementpath, waitTimeOut : number = TIMEOUT_S) {
        await elementpath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(await elementpath).toBeDisplayed();
    }

    //Verify element is displayed
    public async ecommVerifyElementIsDisplayed(elementpath) {
        await expect(elementpath).toBeDisplayed();
    }

    //Verify element is not displayed
    public async ecommVerifyElementIsNotDisplayed(elementpath) {
        await expect(elementpath).not.toBeDisplayed();
    }

    //Get attribute of textbox
    public async ecommGetAttributeAndVerifyExacttext(elementpath, expectedtext, attributeValue, waitTimeOut : number = TIMEOUT_S)
    {
        await elementpath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(await (await elementpath).getAttribute(attributeValue)).toEqual(expectedtext);
    }

    //Verify element attribute and value
    public async ecommVerifyElementAttributeAndValue(elementpath, elementAttribute, expectedValue, waitTimeOut : number = TIMEOUT_S)
    {
        await elementpath.waitForDisplayed({ timeout: waitTimeOut });
        await expect(elementpath).toHaveAttributeContaining(elementAttribute, expectedValue);
    }

    //Get Boolean Value for Element Is Displayed
    public async ecommBooleanElementIsDisplayed(elementpath): Promise<boolean> {
        const   booleanIsDisplayed = await ((await elementpath).isDisplayed());
        return  booleanIsDisplayed;
    }

    //Pause on specific element
    public async ecommPauseOnElement(elementpath, waitTimeOut : number = TIMEOUT_XXS)   {
        await (await elementpath).pause({ timeout: waitTimeOut });
    }

    //Generate random email
    public async ecommRandomEmailGenerator(): Promise<string> {
        const randomEmail = await require('random-email');
        const customerEmail = await randomEmail( {domain: 'yopmail.com'} );
        console.log("randomEmail = "+customerEmail);
        return customerEmail;
    }

    /**
    * Wait for the picker to be shown
    */
    public async ecommwaitForIsShown(isShown = true) {
        // iOS and Android have different elements we need to interact with
        // we determine the selector here
        const selector = driver.isIOS ? SELECTORS.IOS_PICKERWHEEL : SELECTORS.ANDROID_LISTVIEW;
        await $(selector).waitForExist({
            timeout: 11000,
            reverse: !isShown,
        });
    }


    /**
     * Select a value from the picker
     */
    public async ecommselectValue(value: string) {
        // Wait for the picker to be shown
        await this.ecommwaitForIsShown(true);
        // There is a difference between setting the value for iOS and Android
        if (driver.isIOS) {
            await this.setIOSValue(value);
        } else {
            await this.setAndroidValue(value);
        }
        // Wait for the picker to be gone
        await this.ecommwaitForIsShown(false);
    }


    /**
     * Set the value for Android
     */
    public async setAndroidValue(value: string) {
        // For Android we can click on a value, if it's in the list, based on the text
        await $(`${SELECTORS.ANDROID_LISTVIEW}/*[@text='${value}']`).click();
    }

    /**
     * Set the value for IOS
     */
    public async setIOSValue(value: string) {
        await $(SELECTORS.IOS_PICKERWHEEL).addValue(value);
        await $(SELECTORS.DONE).click();
    }
}

export default new ElementActions();