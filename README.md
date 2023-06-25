# simple-shopping-cart
Simple shopping cart aplication on ReactNative.

Release apk is placed in `android/app/build/outputs/apk/release`

## Tech notes.

App is build with help of redux/toolkit and react-navigation.

App doesn't support dark/light theme.

App doesn't support responsive design for different devices.

Unit/Integration tests are not provided, becuase it wasn't included in the task.

Cart Data is not safed in async storage if we close the app.

## User expirience.

User can select any item in shopping list on Home tab.

User can change count for adding item to cart by pressing on + or - buttons. It will be increased/decreased by 1 locally.

Button `Add to cart` will add all items to cart and will reset local items count to zero.

If there are 0 items to add to cart the button `Add to cart` is disabled.

User can see list of added items in cart.

User can increase/decrease items in card by pressing + or -. It will be increased/decreased by 1 globally.

If it will be 0 for item, then this item will be removed from cart screen.
