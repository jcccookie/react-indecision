const user = {
   name: 'Nate',
   age: 18,
   location: 'LA',
}

var userName = 'Mike';
var userAge = 26;
var userLocation = 'New York'

function getLocation(location) {
   if (location) {
      return <p>Location: {location}</p>
   } 
}

const templateTwo = (
   <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
   </div>
);