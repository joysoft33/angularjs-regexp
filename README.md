## Sample AngularJS application showing form validation.

This is an exercise :

- email address validation :
  - Must contain characters, digits, dot, dashes, underscores
  - Followed by a @
  - Followed by characters or numbers
  - Followed by a point
  - Followed by sequences of at most 3 characters separated by a period
    ex. _server-123@domain.co.uk_

- firstname/lastname validations :
  - Cannot contain digits
  - Neither special characters
    => Must be a pure alpha word
  - Only the first character can be in uppercase
  - Dashes are accepted (for Jean-Luc)
  - (Optional) Must not exceed 50 characters
  - (Optional) Can contain accents

- age validation :
  - Must be a number
  - Cannot exceed 139 years

- address validation :
  - Must be formed like this :
  - _33 Rue Saint-André, 33000 Bordeaux_
  - So 1 number for the street, the street name, a comma, the postal code and the city
