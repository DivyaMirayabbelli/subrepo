/* eslint-disable */
const argv = require('yargs').argv;

//Constants Generic
export const DEFAULT_PIN = 1234;
export const INCORRECT_PIN = 4321;
export const TIMEOUT_XXS = 2000;
export const TIMEOUT_XS = 5000;
export const TIMEOUT_S = 10000;
export const TIMEOUT_M = 20000;
export const TIMEOUT_L = 30000;
export const TIMEOUT_XL = 40000;
export const TIMEOUT_XXXL = 80000;
export const TIMEOUT_XXXXL = 300000;
//BANNER
export const BANNER = argv.banner;

//Constants Loyalty Cards
export const LOYALTY_CARD_RO = "0461111111243";
export const LOYALTY_CARD_USED_RO = "0465000299005";
export const LOYALTY_CARD_GR = "9900202102";
//
export const USERNAME = "dev2@yopmail.com";
export const PASSWORD = "Test@123";

//Constants Credit Card GR
export const CREDIT_CARD_NUMBER_GR = "4016 3600 0000 0010";
export const CREDIT_CARD_NAME_GR = "visa ab";
export const CREDIT_CARD_EXPIRY_GR = "10/30";
export const CREDIT_CARD_CVC_GR = "123";
//Constants Discover Payment Card GR
export const DISCOVER_CARD_NUMBER_GR = "6011 0009 9013 9424";
export const DISCOVER_CARD_NAME_GR = "discover ab";
export const DISCOVER_CARD_EXPIRY_GR = "10/30";
export const DISCOVER_CARD_CVC_GR = "123";
//Constants Diners Payment Card GR
export const DINERS_CARD_NUMBER_GR = "3684 9800 0002 65";
export const DINERS_CARD_NAME_GR = "diners ab";
export const DINERS_CARD_EXPIRY_GR = "10/30";
export const DINERS_CARD_CVC_GR = "123";
//Constants Visa 3DS card GR
export const VISA_3DS_CARD_NUMBER_GR = "4016 3600 0000 0002";
export const VISA_3DS_CARD_NAME_GR = "Visa dd";
export const VISA_3DS_CARD_EXPIRY_GR = "10/30";
export const VISA_3DS_CARD_CVC_GR = "123";
export const VISA_3DS_PASSWORD = "Secret!33";
//Constants Visa 3DS card GR
export const VISA_3DsV2_CARD_NUMBER_GR = "4012 0000 0001 2003 001";
export const VISA_3DsV2_CARD_NAME_GR = "Visa ds";
export const VISA_3DsV2_CARD_EXPIRY_GR = "12/30";
export const VISA_3DsV2_CARD_CVC_GR = "123";
export const VISA_3DsV2_PASSWORD = "Secret33!";
//Constants MasterCard For Secure Verification GR
export const MASTER_CARD_NUMBER_GR = "5188 3400 0000 0003";
export const MASTER_CARD_NAME_GR = "master ab";
export const MASTER_CARD_EXPIRY_GR = "10/30";
export const MASTER_CARD_CVC_GR = "123";
export const MASTER_CARD_PASSWORD = "Secret!33";

//Constants for RO
//Payment card numbers
export const VISA_CARD_NUMBER = "4111 1111 1111 1111";
export const CLASSIC_CARD_NUMBER = "4166 6766 6766 6746";
export const VISA_3DS_CARD_NUMBER_OTP_RO = "4917 6100 0000 0000";
export const VISA_3DS_CARD_NUMBER_PASSWORD_RO = "4212 3456 7890 1237";
export const MASTER_CARD_NUMBER_PASSWORD_RO = "5212 3456 7890 1234";
export const MASTER_CARD_NUMBER_NO_VERIFICATION_RO = "5101 1800 0000 0007";
export const MAESTRO_CARD_NUMBER_PASSWORD_RO = "6771830999991239";
export const MAESTRO_CARD_NUMBER_VERIFICATION_RO = "6771830999991239";
export const MAESTRO_EXPIRY_RO = "10/30";
export const NAME_ON_MAESTRO_CARD = "Maestro_Tester";
export const NAME_ON_VISA_CARD = "Visa_Tester";
export const NAME_ON_CLASSIC_CARD = "Classic_Tester";
export const NAME_ON_MASTER_CARD = "Master_Tester";
export const EXPIRY_DATE = "03/30";
export const CVV_NUMBER = "737";
export const VISA_3DS_OTP_RO = "1234";
export const VISA_3DS_USER_RO = "user";
export const VISA_3DS_PASSWORD_RO = "password";

//Constants for RS
//3DS Payment card numbers
export const VISA_CARD_NUMBER_SECURE_RS = "4446 7631 2581 3623";
export const VISA_CARD_NUMBER_RS = "4258 4642 5846 4253";
export const NAME_ON_VISA_CARD_RS = "Visa_Tester";
export const VISA_EXPIRY_DATE_SECURE_RS = "12/26";
export const VISA_EXPIRY_DATE_RS = "12/30";
export const CVV_NUMBER_RS = "000";

//Constants For MasterCard Secure Verification RS
export const MASTER_CARD_NUMBER_RS = "5456 1654 5616 5454";
export const MASTER_CARD_NUMBER_SECURE_RS = "5222405222405229";
export const MASTER_CARD_NAME_RS = "master ab";
export const MASTER_CARD_EXPIRY_RS = "12/30";
export const MASTER_CARD_CVC_RS = "000";

//Constants for MaestroCard RS
export const MAESTRO_CARD_NUMBER_RS = "6759 6498 2643 8453";
export const MAESTRO_CARD_NAME_RS = "maestro";
export const MAESTRO_CARD_EXPIRY_RS = "12/30";

//Constants DinaCard for RS
export const DINA_CARD_NUMBER_RS = "9891 0404 0000 2365";
export const DINA_CARD_NAME_RS ="Dina";
export const DINA_CARD_EXPIRY_RS = "10/30";
export const DINA_CARD_CVC_RS ="001";

//Phone Number
export const RO_PHONE_NUMBER = "0711111107";

//Constants for Individual User RS
export const FIRST_NAME = "auto";
export const LAST_NAME = "test";
//Constants for Business User RS
export const BUSINESS_USERNAME = "businessuser@yopmail.com";

//API Calls URI
export const REQRES_BASE_URI = "https://www-qa2.delhaize.be"
export const payload = {
}
export const headers = {
    'Authorization': 'Bearer 1c675f38-8d94-44b6-b096-a575bebe6129',
    "Cookie": "AWSELB='Cookie': 'AWSELB=1197B72D081230231FA2081849E023779693363F824F9B0A5359FC45C8DA3DA9691696C43E352F5CE631117D47E73AD6DEA4491B2B7CE49B744F62C765D9C27484C46C5271812738CF50012EA6ACA2AE9CCEAD1368; JSESSIONID=30C3ADB4ABED417EA37D560AB80873D5.app3; _abck=13F148B70CEE86874D68D210209F6AD4~-1~YAAQTF8sMWsSc8OFAQAA6RMmDAntODHzaPvvDXbhxdBaUWGe51eRwMp+T+geVZVDR+XCbKMmiW9u9Wr/82TwEnd6G5wAww72+CCjJdvD145zlqSFdvvxDRfZUu8Uv8iToF8T5z2VjPgIchZWB6Sl9MxrwC7NGE3bGiaoz1MeqzSZgJK+O3MVd4fbkNr2937/aZSbkkteCS+BmdziBly7r7E9d05fhl2svdMiZS+sS5vryCmUzslWs9/gcEua4PMb6HKXsN/gZP6Zg5KTTBTa0eaCIsrue1uQlRZEOX9NC30RWmDN2Ue31PkBAooa5zKkr05H543x1SBfKTTWsGOccrZQz4hAWxyi0WVf7DcFq8LPdpOsj4RsW8/+8ZSBNAK6twmGFgpAGqs=~-1~-1~1674480313; ak_bmsc=553C85E4C23120FE1BB9C8BB53BBA110~000000000000000000000000000000~YAAQTF8sMSUnc8OFAQAAE2ovDBIYF+t6dwqxV+V37xwTKZW3Fok+nOvftc6kqcQn4pRy0pznuoMC66vKca76L5KMeD4GnlbyjccdXb894xAixTHQr5wjlqt7OcZEmE9KMl71lX7/AWlSUDhDhbOsuO80y7qOz+8vIBKGwGeYfIaIoW3CYd/fMZvi22/o0fEJLy+UwhTB5E6lp3ua5ZOvnhE4bG8x7+lU8GXvLSxvWmgQOZA+HBzR0LJxatXE1yUyAElGkAvEFX1zm2bYA1+2P2ghvPukUAeNhLW/QCA3VLPNSJnbfSEZlaCMUVzyFlfiwZlA1onS8sSMd5JeGpXEQtcALDBaQKpgrdCsB6K9IJK0Z1RhZq4cZ9wX3K01EQ==; bm_sv=83FFDD4C2F93CD6CD2F9CAB2F659C9E1~YAAQtidzaJ/F6vSFAQAA6jmLDBJTPLE0614AyMl7nRrOYKd6HGv4+EPXpg1+DaQbNipurokFSesrjm52+ssOlvjGQbxEkR9OCfH3iwD8PkSsXV9txXOW+j5Pb00lUyij+WkjFbRGyVnUaUFwpzGLV9E1RZQhMrE/pgktnHjEE/mQzkGHmhwgd4FkjdI8fnId+Icyg3aBgv0/CsTCOFevGaxdahraJdhA11AZSdo0b3jwBoqKv1/xSuYuav3jVCiDZg==~1; bm_sz=07A5A64D9C0B6F67ED0C598A46045E63~YAAQTF8sMWwSc8OFAQAA6RMmDBKuDzlrKOfesPYdaYwSPnc0u/PeHy7zD9JPmUeoW9TQk/bWuU+jfWVcLhj08wT820P20v3naf3b+wgWDDH52OFcXtxaf+GNJaEcSNbjemB6jq2qZYeMI+l00xdiS8eM7WyDitWnsJWQsloZ0j2b0uLbdjzde9BE2F/sMq/m+OWSdjMqTZ5bbRgmmirn76fMyjkYWtIouB6jvTz8MKUll3xMjo+YUoOUGwP+2B19Ss9/7+oX9hWjAm/LaqGX+48D7orEQe8E3MkHR9VWaTkEN8Ao~4604741~3290436; AWSALB=hiGhC1IMgIm4VF1LfXD/J2Awpw8mI36tsVMEp4oSr4zDHeOhA1R4kFWhn3DqEN8aaFgRcYhcDsLctT/Tt3WiOAsiuZXPdIoxKGSEc6XIIt3hHW/oolAfHiCMWn6R; AWSALBCORS=hiGhC1IMgIm4VF1LfXD/J2Awpw8mI36tsVMEp4oSr4zDHeOhA1R4kFWhn3DqEN8aaFgRcYhcDsLctT/Tt3WiOAsiuZXPdIoxKGSEc6XIIt3hHW/oolAfHiCMWn6R'; JSESSIONID=7F483BB090600F165CB58FA3F4A335A2.app3; _abck=13F148B70CEE86874D68D210209F6AD4~-1~YAAQTF8sMWsSc8OFAQAA6RMmDAntODHzaPvvDXbhxdBaUWGe51eRwMp+T+geVZVDR+XCbKMmiW9u9Wr/82TwEnd6G5wAww72+CCjJdvD145zlqSFdvvxDRfZUu8Uv8iToF8T5z2VjPgIchZWB6Sl9MxrwC7NGE3bGiaoz1MeqzSZgJK+O3MVd4fbkNr2937/aZSbkkteCS+BmdziBly7r7E9d05fhl2svdMiZS+sS5vryCmUzslWs9/gcEua4PMb6HKXsN/gZP6Zg5KTTBTa0eaCIsrue1uQlRZEOX9NC30RWmDN2Ue31PkBAooa5zKkr05H543x1SBfKTTWsGOccrZQz4hAWxyi0WVf7DcFq8LPdpOsj4RsW8/+8ZSBNAK6twmGFgpAGqs=~-1~-1~1674480313; ak_bmsc=553C85E4C23120FE1BB9C8BB53BBA110~000000000000000000000000000000~YAAQTF8sMSUnc8OFAQAAE2ovDBIYF+t6dwqxV+V37xwTKZW3Fok+nOvftc6kqcQn4pRy0pznuoMC66vKca76L5KMeD4GnlbyjccdXb894xAixTHQr5wjlqt7OcZEmE9KMl71lX7/AWlSUDhDhbOsuO80y7qOz+8vIBKGwGeYfIaIoW3CYd/fMZvi22/o0fEJLy+UwhTB5E6lp3ua5ZOvnhE4bG8x7+lU8GXvLSxvWmgQOZA+HBzR0LJxatXE1yUyAElGkAvEFX1zm2bYA1+2P2ghvPukUAeNhLW/QCA3VLPNSJnbfSEZlaCMUVzyFlfiwZlA1onS8sSMd5JeGpXEQtcALDBaQKpgrdCsB6K9IJK0Z1RhZq4cZ9wX3K01EQ==; bm_sv=83FFDD4C2F93CD6CD2F9CAB2F659C9E1~YAAQVF8sMcNVrc6FAQAA8BZ5DBKjW/rb2ZcQPrZ+7SAsLrpnVcLu794N/Y+axftuKrzb65DXk+CxG/k8228oCXwDUygIMXOMX4c8FpM5+mdFvP846VEdb1TusoMjyN91s+LGTKMMIN6gufSPQg2/1uOgzrBKVZnStGmDgkriraan3K+MxAHCvbhKlpLZrOrJdsu7h8+Y72y4Zhgxo7M6Z6wGYiNY795pyQhgjD/v9bgUA6QjdwqnitjD8gDuTQLcYw==~1; bm_sz=07A5A64D9C0B6F67ED0C598A46045E63~YAAQTF8sMWwSc8OFAQAA6RMmDBKuDzlrKOfesPYdaYwSPnc0u/PeHy7zD9JPmUeoW9TQk/bWuU+jfWVcLhj08wT820P20v3naf3b+wgWDDH52OFcXtxaf+GNJaEcSNbjemB6jq2qZYeMI+l00xdiS8eM7WyDitWnsJWQsloZ0j2b0uLbdjzde9BE2F/sMq/m+OWSdjMqTZ5bbRgmmirn76fMyjkYWtIouB6jvTz8MKUll3xMjo+YUoOUGwP+2B19Ss9/7+oX9hWjAm/LaqGX+48D7orEQe8E3MkHR9VWaTkEN8Ao~4604741~3290436; AWSALB=cVPRu4g3buhEttcLQMUw7Udm3vFsRzt+Sg8DmERhy6OrsQSoHDuUV6ecvUu1Rtqa9CPz5jgIyKWNEDWO74ZWb+KLK4hC2J/oOTeBNQIJ9b1XbguSjfZ4nNDMJItF; AWSALBCORS=cVPRu4g3buhEttcLQMUw7Udm3vFsRzt+Sg8DmERhy6OrsQSoHDuUV6ecvUu1Rtqa9CPz5jgIyKWNEDWO74ZWb+KLK4hC2J/oOTeBNQIJ9b1XbguSjfZ4nNDMJItF"
}
//Constants Visa 3DS v2 card card with secure verification BE
export const VISA_NUMBER_BE = "4917 6100 0000 0000";
export const VISA_CARD_NAME_BE = "visa";
export const VISA_CARD_EXPIRY_BE = "03/30";
export const VISA_CARD_CVC_BE = "737";
export const VISA_CARD_CODEEnter_BE = "1234";
export const PHONE_NUMBER = "621111122"
//Constants Maestro card type with required CVC BE
export const MAESTRO_NUMBER_BE = "5000 5500 0000 0029";
export const MAESTRO_CARD_NAME_BE = "maestro";
export const MAESTRO_CARD_EXPIRY_BE = "03/30";
export const MAESTRO_CARD_CODEEnter_BE = "1234";
//Constants Maestro (Bancontact) card type - 16 digits
export const BANCONTACT_NUMBER_BE = "6703 4444 4444 4449";
export const BANCONTACT_CARD_NAME_BE = "bancontact";
export const BANCONTACT_CARD_EXPIRY_BE = "03/30";
export const BANCONTACT_USERNAME_BE = "user";
export const BANCONTACT_PASSWORD_BE = "password";
//Constants Visa 3DS v1 card card with secure verification BE
export const VISA_V1_NUMBER_BE = "4212 3456 7890 1237";
export const VISA_V1_CARD_NAME_BE = "visa";
export const VISA_V1_CARD_EXPIRY_BE = "03/30";
export const VISA_V1_CARD_CVC_BE = "737";
export const VISA_V1_USERNAME_BE = "user";
export const VISA_V1_PASSWORD_BE = "password";
//Constants Visa 3DS v2 card card with secure verification BE
export const VISA_V2_NUMBER_BE = "4917 6100 0000 0000";
export const VISA_V2_CARD_NAME_BE = "visa";
export const VISA_V2_CARD_EXPIRY_BE = "03/30";
export const VISA_V2_CARD_CVC_BE = "737";
//Constants Master 3DS v2 card card without secure verification BE
export const MASTER_V2_NUMBER_BE = "5101 1800 0000 0007";
export const MASTER_V2_CARD_NAME_BE = "master";
export const MASTER_V2_CARD_EXPIRY_BE = "03/30";
export const MASTER_V2_CARD_CVC_BE = "737";
//Constants Mastercard 3D Authorization with secure verification BE
export const MASTER_3DAuth_NUMBER_BE = "5212 3456 7890 1234";
export const MASTER_3DAuth_CARD_NAME_BE = "mastercard";
export const MASTER_3DAuth_CARD_EXPIRY_BE = "03/30";
export const MASTER_3DAuth_CARD_CVC_BE = "737";
export const MASTER_3DAuth_USERNAME_BE = "user";
export const MASTER_3DAuth_PASSWORD_BE = "password";

// Product IDs
// RO
export const NORMAL_PRODUCT_RO = "18161";
export const CASE_PRODUCT_RO = "76744";
export const PROMOTION_PRODUCT_RO = "19773";
export const CASE_PRODUCT1_RO = "21868";

//Products IDs
//BE
export const NORMAL_PRODUCT_BE = "672596";
export const CASE_PRODUCT_BE = "992028";
export const CASE_PRODUCT1_BE = "466425";
export const PROMOTION_PRODUCT_BE = "332208";

//Products IDs
//RS
export const NORMAL_PRODUCT_RS = "7287460";
export const CASE_PRODUCT_RS = "7247647";
export const PROMOTION_PRODUCT_RS = "7449902";

//gr
export const CASE_PRODUCT1_GR = "4110619";

//RS
export const CASE_PRODUCT1_RS = "466425";
