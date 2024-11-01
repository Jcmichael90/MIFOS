# BLUSALT ASSESSMENT
## GUIDE
### Clone the repository, navigate to the ropostory and open terminal inside the repository, then use npm install to install all the dependencies to run the test
### Verify user is able to Login with valid username and valid password
## STEPS
#### -Lunch the browser
#### -Navigate to the URL: https://demo.mifos.io/
#### -Enter valid username
#### -Enter valid password
#### -Click on sign in

### Verify user is not able to Login with valid username and invalid password
## STEPS
#### -Lunch the browser
#### -Navigate to the URL: https://demo.mifos.io/
#### -Enter valid username
#### -Enter invalid password
#### -Click on sign in

### Verify user is not able to Login with invalid username and valid password
## STEPS
#### -Lunch the browser
#### -Navigate to the URL: https://demo.mifos.io/
#### -Enter invalid username
#### -Enter valid password
#### -Click on sign in

### Verify user is not able to Login with invalid username and invalid password
## STEPS
#### -Lunch the browser
#### -Navigate to the URL: https://demo.mifos.io/
#### -Enter invalid username
#### -Enter invalid password
#### -Click on sign in

### Verify user is able to create a loan account for a client
## STEPS
#### -Login account
#### -Navigate to clients
#### -Click on client name
#### -Click on new loan
#### -Select loan product
#### -Fill the reqiured informations under 'Details'
#### -Fill 'Terms' details
#### -Fill charges field
#### -Preview
#### -Submit

### Verify user is not able to proceed without completing the mandatory fiels
## STEPS
#### -Login account
#### -Navigate to clients
#### -Click on client name
#### -Click on new loan
#### -Select loan product
#### -Leave mandatory fields empty
#### -Preview
#### -Submit

### Verify user is able to approve a loan application
## STEPS
#### -Select client
#### -Click on view active loan
#### -Click the loan account to be approved
#### -Click Approve on the action bar
#### -Confirm/adjust approval details
#### -Click on submit

### Verify user is able to initiate loan repayment
## STEPS
#### -Select client
#### -Click on view active loan
#### -Click the loan account to be repaid
#### -Click make repayment on the action bar
#### -Confirm repayment details
#### -Click on submit


## OBSERVATIONS
### 1. While creating a loan account, 'working capital' is the only loan purpose on the dropdown
### 2. After a loan account has been created, loan collateral saved by the user is not displayed under loan collateral after submission
