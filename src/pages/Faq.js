import React from 'react'
import Accordion from "../components/Accordion";

const Faq = () => {
    return (
      <div className="faq">
        <Accordion
          title="What is hudson-essentials?"
          content={`<p>hudson-essentials is a leading online food delivery service that operates in Kuwait, Saudi Arabia, UAE, Bahrain, Oman, Qatar, Jordan, Egypt and Iraq.</p>

We seamlessly connect customers with their favorite restaurants. It takes just few taps from our platform to place an order through hudson-essentials from your favorite place.
`}
        />
        <Accordion
          title="What does hudson-essentials do?"
          content={`We simply take your submitted order and send it to the restaurant through a completely automated process, so you don’t have to deal with all the hassle of ordering and we make sure that you receive your order on time, every-time!`}
        />
        <Accordion
          title="Why should I use hudson-essentials than using a phone?"
          content={`hudson-essentials is the one huge food court for many restaurants, so you don’t need to go through the hassle of finding restaurants numbers, waiting on hold or getting a busy signal while dialing a restaurant number or getting the wrong order due to miscommunication over the phone! Besides by using hudson-essentials you can view menus with pictures of all your favorite restaurants in our easy to use website and apps.
`}
        />
        <Accordion
          title="How much will it cost me to use hudson-essentials services?"
          content={`The only extra charges that might be applied are the restaurant delivery fees.`}
        />
        <Accordion title="Do you have Debit Card / Credit Cards services?" content={`<p>Yes, most of the restaurants on hudson-essentials support online payment options for Debit Card/Credit Card. Here you can find all online payment methods we provide based on countries:</p>

- UAE: MasterCard, Visa and Visa Checkout.<br>
- Qatar: MasterCard and Visa.<br>
- Kuwait: MasterCard, Visa and K-Net.<br>
- KSA: MasterCard, Visa and SADAD.<br>
- Bahrain: Benefit (Debit Card), MasterCard and Visa.<br>
- Oman: MasterCard and Visa.<br>
- Jordan: Online payment options are coming soon.`} />
        <Accordion title="Do you have special offers?" content={`Yes. You can view the latest restaurant promotions and discount coupon in offers tab.`} />
        <Accordion title="What is Visa Checkout?" content={`<p>Visa Checkout makes online shopping more enjoyable by making it easy to complete your purchase. Simply enter your username and password whenever you see the Visa Checkout button and speed through your online shopping experiences with a single account that can be used across all your devices.</p>

(Visa Checkout available only in UAE)`} />
        <Accordion title="Is Visa Checkout only support Visa cards?" content={`You can add your Mastercard and Visa cards to Visa Checkout account.`} />
        <Accordion title="How do I place an order on hudson-essentials?" content={`<p>Follow these simple instructions:</p>

<p>Create an account or login using your Facebook account. You can also order without an account using “ُExpress Checkout”. Note: logged in users benefit from a personalized experience.</p>

<p>Select your area and optionally choose a cuisine you're craving and hit "Find Restaurants".</p>

<p>You'll see a wide variety of restaurants in your area, choose your favorite restaurant from the list or use sort, filter, cuisines or search to find exactly what you're looking for.</p>

<p>Click on a restaurant to view its menu, search the menu, read reviews. Add items directly to your cart and proceed to checkout.</p><br>

<p>Select or enter your address, review your order, select a delivery time, apply voucher code in checkout if applicable and hit "Place Order".</p><br>

Your order will then be placed and routed to the restaurant immediately. Note: if you are using our service for the first time we will call your mobile number for confirmation purposes.`} />
        <Accordion title="Can I place an order without creating an account?
" content={`<p>Yes. You can place an ‘Express Checkout’ order which is an easier way for newcomers to experience our online service.</p><br>

<p>To order without an account, continue with your ordering journey and when prompted to login choose "Express Checkout" option. Provide your name, mobile number and your address at the checkout page!</p><br>

<p>The purpose of this service is to give a chance to all newcomers to test our service and experience its simplicity, efficiency and reliability.</p><br>

Once familiar with our service, you can simply create an account to access all the added value features and benefit from a personalized ordering experience.`} />
        <Accordion title="Can I place an order for late delivery?" content={`Yes you can. Some restaurants allow customers to place an order in advance (select date and time) i.e. place an order after one hour, two hours etc. depending on restaurants delivery policy and on restaurant working hours. From checkout you can choose "Pre-Order" option and choose a delivery date and time.`} />
        <Accordion title="I entered my email/password combination wrong and now my account is blocked, what do I do?" content={`If you entered wrong combination of email/password repeatedly up to 5 times, your account will be blocked temporarily. The system will automatically send you an email verification link to your email address which you need to unblock your account. In this email, we will also ask you to choose a new password.
`} />
        <Accordion title="Can I have multiple addresses into my account?" content={`Yes. You can add as many addresses as you need to a single account. Go to Saved Addresses and click on "Add New Address" button.`} />
        <Accordion title="If I placed an order, how long does it take to receive the order?" content={`It depends on the restaurant's estimated delivery time, each restaurant will display its order delivery time in the restaurant's "Info" tab. However, the time may vary depending on road traffic congestion.`} />
        <Accordion title="I just placed an order, but I’m not sure if you got it. What do I do?
" content={`For logged in users, go to "My Order" tab and see if your order is listed. If you order is listed check the order status for successful.`} />
        <Accordion title="Can I re-order a previous order?" content={`Yes. You can simply go to "My Orders" tab and choose an order from your previous orders and re order it.
`} />
        <Accordion title="How do I add an item as a favorite?" content={`You can simply click on the icon ‘add as a favorite’ available on all menu items on restaurants. You can also easily go to my favorites section on My Account page re order these items.`} />
        <Accordion title="I forgot to add an item to my order, what do I do?" content={`Contact us if you need to add, remove or change items from your order. However, please note that if the restaurant already dispatched your order then any additional items may be accounted as a new order.`} />
        <Accordion title="I was not happy with my order? Who should I contact?" content={`If you have any issues with your order, you can notify us by calling our call center number or send us your complaint to customercare@hudson-essentials.com and your complaint will be handled by our customer service team.
`} />
        <Accordion title="Can I cancel my order? (subject to strict policy i.e. for late orders, missing items, wrong item, and delay in delivery.)" content={`Yes, you can cancel your order within 5 minutes of placing your order. Please note that you cannot cancel your order later on because your order would have been already processed from the restaurant side. If your order was late for more than 20 minutes beyond the delivery promise time of the restaurant, you may also cancel your order. For debit and credit cards orders please read our debit / credit cards Terms and Conditions.<br>

(Debit Cards online payment is currently available in Kuwait and Bahrain only)`} />
        <Accordion title="How long does the online payment refund process take?" content={`The duration of the refund process varies depending on the payment method you used.<br>
For K-Net it may take up to 3 working days, while for Benefit and SADAD it may take up to 6 working days.<br>
The refund for MasterCard and Visa may take up to 6 days.<br>
To learn more about our refund policy, we invite you to read our Terms and Conditions.`} />
        <Accordion title="The order I received was not acceptable, how can I contact you?" content={`If the order you received mismatches the order you placed or if there were missing/wrong items in your order, you can contact us directly through or by calling our call center and our customer service team will dispatch a complaint letter to the restaurant and we will notify you accordingly.`} />
        <Accordion title="Can I rate or write a review about my recent order?" content={`<p>Yes. You can rate and write a review about your previous order. You can simply go to ‘My Orders’ tab on my account page and click on a particular order to rate/review.</p><br>

Please note that reviews are subject to our moderation and will be showing on the restaurant section within 24 hours. Please read this section of our Terms and Conditions for more information about our reviews policy.`} />
        <Accordion title="What is hudson-essentials credit?" content={`hudson-essentials credit is a service that allows users to place orders with ease without having to refer to the hudson-essentials debit cards payment gateway every time users wish to pay through Debit Card. It simply saves you time and makes ordering easier and faster.<br>
(This service is currently available in Kuwait and Bahrain only)`} />
        <Accordion title="How do I purchase hudson-essentials credit?" content={`<p>You must have an account with hudson-essentials first to buy hudson-essentials credit. You can simply login and go to ‘My Account’ page and click on the hudson-essentials credit tab. You will be able to choose the amount of credit you want to purchase and purchase this credit through our secure Debit Card payment gateway. You can top-up your credit at any time.</p>

<p>You can purchase amount of 5, 10, 20, 50, 100 200 KD / BD credit to use on hudson-essentials.</p>

(This service is currently available in Kuwait and Bahrain only)`} />
        <Accordion title="When does my hudson-essentials Credit expire?" content={`<p>hudson-essentials Credit cannot be used past the expiry date, which can be viewed in the hudson-essentials Credit statement.</p>

<p>hudson-essentials Credit purchased by the user expires after 180 days.</p>

<p>When a user receives hudson-essentials Credit as compensation for an order, the credit will have a new expiration date up to 90 days from the date of receipt.</p>

The user will be notified via email when their credit is nearing expiration.

`} />
        <Accordion title="Which restaurants can I place orders from using my hudson-essentials credit?" content={`<p>Currently only restaurants that have debit card facility can be used to place orders using hudson-essentials credit.</p>

(This service is currently available in Kuwait and Bahrain only)
`} />
        <Accordion title="Where can I see my hudson-essentials credit balance and statement?
" content={`<p>The hudson-essentials credit balance is shown in "hudson-essentials Credit" tab under navigation bar.</p>
<br>

<p>To see your hudson-essentials credit statement, you click on the "hudson-essentials Credit Statement" tab.</p>

<p>(This service is currently available in Kuwait and Bahrain only)</p>

For more information about hudson-essentials credit, please read this section of our Terms and Conditions.`} />
        <Accordion title="What is hudson-essentials gift voucher?
" content={`<p>hudson-essentials gift voucher is a service that enables users to buy gift voucher with predefined amounts from hudson-essentials and send this voucher to a friend to use on placing orders through hudson-essentials.</p>

(This service is currently available in Kuwait and Bahrain only)`} />
        <Accordion title="What are the gift voucher amounts available?" content={`<p>You can buy amount of 5, 10, 20, 50, 100, 200 KD / BD gift vouchers through hudson-essentials.</p>

(This service is currently available in Kuwait and Bahrain only)`} />
        <Accordion title="How do I purchase hudson-essentials gift voucher?" content={`<p>Click on the "hudson-essentials gift Voucher" tab and choose gift voucher amount.</p>

<p>If the recipient is not registered with hudson-essentials, the recipient of the gift voucher has to create an account to benefit from this gift voucher after clicking on the verification link in the email notification. Upon creating an account, the gift voucher will automatically convert into hudson-essentials credit with the same gift voucher amount.</p>

<p>If the user has an account with hudson-essentials, then upon clicking on the verification link in the notification email, the recipient will be able to see the gift voucher amount in ‘hudson-essentials Credit’ in which the gift voucher is converted into hudson-essentials credit with the same gift voucher amount.</p>

<p>(This service is currently available in Kuwait and Bahrain only)</p>

For more information about hudson-essentials gift voucher, please read this section of our Terms and Conditions.`} />
        <Accordion title="How can I contact hudson-essentials.com?" content={`You can contact us anytime through live chat or call us our hotline number (we operate 24 hours) or send your feedback through the "Feedback" tab.`} />
        
      </div>
    );
}

export default Faq
