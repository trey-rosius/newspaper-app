<template>
    <div class="container">
      <div class="content">
           <div class="left">
           <h2 class="article-title article-title--large">
					<a href="#" class="article-link">The Newspaper for <mark class="mark mark--primary">Those</mark> who can <mark class="mark mark--secondary">Read</mark></a>
				</h2>
          </div>
        <div class="right">
         <amplify-authenticator v-if="authState !== 'signedin'" class="signIn" />
          <div class="authenticated" v-if="authState === 'signedin' && user">
          <update-profile :email="user.attributes.email"
          :userId="user.attributes.sub" :username="user.username" />
     <button v-on:click="signOut">Sign Out</button>
    </div>
      </div>
    </div>
    </div>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { Auth }  from 'aws-amplify';
import UpdateProfile from '../components/UpdateProfile.vue';
    export default {
components:{UpdateProfile},
       created() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
      console.log(this.user);
    })
  },
  data() {
    return { user: undefined, authState: undefined }
  },
  methods: {
    signOut(){
      console.log("clicked sign out");
       Auth.signOut();
       this.authState = undefined;
    } 
  },
   beforeDestroy() {
    return onAuthUIStateChange;
  }
        
    }
</script>

<style lang="scss" scoped>

amplify-authenticator {
  --amplify-primary-color: #000000;
  --amplify-primary-tint: #808880;
  --amplify-primary-shade: #555353;
  --amplify-background-color:#1C00ff00;
  --amplify-white:yellow;

}
.container{

    justify-content: center;
    align-items: center;
    
    display:flex;

    height: 100vh;
    
    
    

}

.content{
    height: 90%;
    width: 70%;
    display: flex;
    border-radius: 10px;
   
    
}
.left{
  flex-basis: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding:20px 20px;
  box-shadow: var(--shadow-dark);
  background-color: var(--background-color-1);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
 
@media screen and (max-width: 1200px) {
        display: none;
      
       }

 
}
.article-title {
	font-family: "Fraunces", serif;
	font-weight: 900;
	line-height: 1.25;
	color:white;

	&--large {
		font-size: 5rem;
		& + * {
			margin-top: 1.5rem;
		}
    
	}

	&--medium {
		font-size: 1.5rem;
		& + * {
			margin-top: 0.75rem;
		}
	}

	&--small {
		font-size: 1.25rem;
		& + * {
			margin-top: 0.75rem;
		}
	}
}
.right{
    flex-grow: 1;
    height: 100%;
    display: flex;
    
    justify-content: center;
    align-items: center;
     
   
    
}
.authenticated{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
button{
  background-color: black;
  border: none;
  color: white;
  height: 50px;
  width: 60%;
  margin-top: 40px;
}





</style>