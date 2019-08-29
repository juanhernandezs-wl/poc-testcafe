 /**
     * TIPS
     * another way to find the element above:
     * this.errInvalidPassword  = Selector("span").withText("Correo o contraseña incorrectos.");
     * 
     * Using attributes
     * this.form_submitButton  = Selector("input").withAttribute("value", "Send Message")
     **/ 

     
    // Assertion examples
    // Contains
    await t
    .expect("Actual value")
    .contains("expected value", "This Message will be printed if test fails", {timeout: 1000});

    await t
    .expect("Actual value")
    .notContains("expected value", "This Message will be printed if test fails", {timeout: 1000});

    // Deep equal
    await t
    .expect("actual value")
    .eql("expected value", "message on error", { timeout:1000})

    await t
    .expect("actual value")
    .notEql("expected value", "message on error", { timeout:1000})  

    // check if exist
    await t
    .expect(Selector('#selector').exists).ok("message on error");
    
    await t
    .expect(Selector('#selector').exists).notOk("message on error");

    // Greater than
    await t
    .expect("actual value")
    .gt("expected value", "message on error", {timeout:1000})

    // Less than
    await t
    .expect("actual value")
    .lt("expected value", "message on error", {timeout:1000})

    // Within some range
    await t
    .expect("actual value")
    .within("start","finis","message on error",{timeout:1000});