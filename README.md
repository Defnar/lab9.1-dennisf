# Readme Instruction
- A README.md file explaining how to use the components

# Notes on the LAB
- I did borrow a lot off the example for interfaces, I borrowed much of the first example for alert box, and some of the components working together example.  I borrowed from the interface setups already there because I wanted to focus purely on the components and learning more about react, borrowed for the alert box because it matched what was needed mostly, aside from formatting and borrowed some of the component working together example (particularly just using the states and function to allow for the product's setup to function), but customized much of that, including nesting an alertbox within the userprofile.

# Component Documentation
## UserProfileCard
```
<UserProfileCard
        user= user object
        showEmail=boolean
        showRole=boolean
        onEdit= your custom function here
      />
```
- takes in an object in the form of user = {id = string, name = string, email = string, role = string).  When instantiating in the item, it's done as a normal react node <UserProfileCard....>  You can add additional information via children by placing it within the node as a child such that `<UserProfileCard...> you're message </UserProfileCard>`.  showEmail and showRole are both booleans to show or hide their respective properties on the user card.  onEdit is where you can write out your own function to perform when the user presses the edit profile button

## ProductDisplay
```
<ProductDisplay
        product=product object
        showDescription=boolean
        showStockStatus=boolean
        onAddToCart=your custom function here
      />
```

- Takes in an object in the form of product = {id = string, name = string, price = number, description = string, imageurl = string, instock = boolean}.   ShowDescription, showStockStatus will show or hide their respective properties on the card.  the onAddToCart function needs to pass to a function that uses the product id.  ImageUrl takes a url in and displays it as an image on the page, but is optional.  As with user, this can also take in a child element by placing it between the opening and closing tag, such that `<ProductDisplay...>{children}</ProductDisplay>`

## AlertBox
```
<AlertBox
          type= "success" | "info" | "warning" | "error"
          message= your custom message
          onClose = your custom function here
        />
```

### Alert colors:
```
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
```
- takes an alert of one of the 4 specified types, changes it's color to what type you use to the above listed color schemes, and displays it on the page.  You can add your own custom message via message="your message here", and specify your own function for onClose that should happen when the x button is clicked.  You can add your own children elements by placing them between the tags for the function such that `<AlertBox...>{children}</AlertBox>`.
