
$(document).ready(function(){
      $(".owl-carousel").owlCarousel();
    });
  

      function readMore() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
    
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

    var trackingData = {
        url: window.location.href,
        username: 'Priya vijayvargiya Tejwani', // Replace with actual username
        useragent:navigator.userAgent,
        method:'view',
    };

//    fetch('/analyticstracking', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(trackingData)
// })
// .then(response => {
//     if (!response.ok) {
//         throw new Error('response is not valid');
//     }
//     return response.json();
// })
// .then(data => {
//     console.log(data); // Handle response data
// })
// .catch(error => {
//     console.log('Error:', error);
// });

    document.getElementById("downloadVCardButton").addEventListener("click", function() {
         var anchor = document.createElement("a");
    anchor.href = 'mam.vcf';
    anchor.download = "mam.vcf";
    anchor.click();
     var trackingData = {
        url: window.location.href,
        username: 'drmukeshthakwani', // Replace with actual username
        useragent:navigator.userAgent,
        method:'click',
    };

   fetch('/analyticstracking', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(trackingData)
})
.then(response => {
    if (!response.ok) {
        throw new Error('response is not valid');
    }
    return response.json();
})
.then(data => {
    console.log(data); // Handle response data
})
.catch(error => {
    console.log('Error:', error);
});
    });

        const shareButton = document.querySelector('.share-button');
        shareButton.addEventListener('click', event => {
            if (navigator.share) { 
            navigator.share({
                title: 'Priya vijayvargiya Tejwani',
                text: 'Priya vijayvargiya Tejwani',
                url: ''
                }).then(() => {
                console.log('Thanks for sharing!');
                })
                .catch(console.error);
                } else {
                   console.log('Something');
                }
            });
   
        $('.glry').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image'
                // other options
        });

            
       
 var token;
    
   var  username= 'Priya vijayvargiya Tejwani';
   
   //this can be generate from firebase console using google account replace here  
    //  Firebase configuration
//     var firebaseConfig = {
//     apiKey: "AIzaSyAMDtrZc4GEzkhOl-VIDXzTNF6nLYt-dV8",
//     authDomain: "amigoo-7cc3a.firebaseapp.com",
//     projectId: "amigoo-7cc3a",
//     storageBucket: "amigoo-7cc3a.appspot.com",
//     messagingSenderId: "854321539377",
//     appId: "1:854321539377:web:7bd446ec605acb46faa810",                                                               
//     measurementId: "G-NST74XFL6V"
//   };                                                                                                    
//     firebase.initializeApp(firebaseConfig);            // Initialize Firebase 

// // Initialize FCM
    // const messaging=firebase.messaging();
    
    // Request notification permission
    
//     function InitiaizeFireBaseMessaging()
//     {
//         messaging
//         .requestPermission()
//         .then(function (){
//             console.log("Notification Permission");
//             // Token can be used to send notifications to individual devices
//             return messaging.getToken();
//         })
//         .then(function (token)
//         {
//             console.log("Token:"+token);
//            // Send this token to your server to associate it with the user
//             jQuery.ajax({
//         url: "inserttoken",
//         type: "POST",
//         data: { token: token,username:username},
//         success: function(data) {

//         console.log(data);
//     }
// })
//         })
//         .catch(function (reason){
//             console.log(reason);
//         });
//     }
    
    // messaging.onMessage(function(payload)
    // {
    //     console.log(payload);
    //     const notificationoption={
    //         body:payload.notification.body,
    //         icon:payload.notification.icon,
    //     };
        
    //     if(Notification.permission==="granted")
    //     {
    //         var notification=new Notification(payload.notification.title,notificationoption);
            
    //         notification.onclick=function(ev){
    //             ev.preventDefault();
    //             window.open(payload.notification.click_action,'_blank');
    //             notification.close();
    //         }
    //     }})
 
    // messaging.onTokenRefresh(function()
    // {
    //     console.log();messaging.getToken()
    //     .then(function (newtoken){
    //         console.log("New Token:"+newtoken);
    //     })
    //     .catch(function (reason){
    //         console.log(reason);
    //     });
    // })
    // InitiaizeFireBaseMessaging();
    
   
    

