<template>
    <div class="container">
      <div class="content">
           <div class="left">
           <h2 class="article-title article-title--large">
					<a href="#" class="article-link">Talk <mark class="mark mark--tertiary">That</mark> Talk</a>
				</h2>
          </div>
        <div class="right">
        
   
        <div v-if="image" class="img-container">
            <input class="pickImage" type="file" @change="onFileChange" />
  
      <div id="preview-pic">
    <img class= "postpic" v-if="url" :src="url" />
  </div>
        </div>
  <div class="checkbox">
     
  <input type="checkbox" name="noImage" id="noImage" class="noImageCheck" @click="showImagePicker">
   <label for="noImage" class="noImage"> No Image</label>
  </div>
  <input type="text" class="postTitle" placeholder= "Post title" v-model="postTitle" name="postTitle" id="postTitle">
        <textarea placeholder="What's new ?" v-model="postText" class="article__post" rows="4" cols="10"/><br>
       
       <Loading v-if="loading" />
        <input type="submit" v-else-if="image" value="Create Article" class="article__btn" @click="addPostWithImage">
        <input type="submit" v-else value="Create Article" class="article__btn" @click="addPostWithoutImage">

        
      </div>
    </div>
    
    </div>
   
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { Auth,API,Storage }  from 'aws-amplify';
import add_image from '@/assets/add_pic.svg';

import { v4 as uuidv4 } from 'uuid';
import {createPost} from '../src/graphql/mutations';
    export default {
mounted() {
    console.log('Params: ', this.$route.params);
    this.userId = this.$route.params.userId;
    console.log("user id is"+this.userId);
   
       
},

    
        data(){
            return {
                postTitle:"",
               postText:'',
               loading:false,
               image:true,
              url:add_image,
               filename:String,
           filePath:String,
            }
        },
         methods:{
             showImagePicker(){
               this.image = !this.image;
             },
           async addPostToDb(){
                const uuid = uuidv4();
               const {userId,postText,filename,postTitle,image} = this;
               const signedURL = await Storage.get(filename); 
               const post = {id:uuid,userId:userId,postText,title:postTitle,postType:"BUSINESS",postStatus:"CREATED",postImageUrl:signedURL,image};
               
               console.log("signed url"+signedURL);
               await API.graphql({
                   query:createPost,
                   variables:{input:post},
               }).then((result) =>{
                   console.log("result is"+result);
                   this.loading = false;
               })
               console.log("successfully uploaded");
               this.postText = "";
               this.loading = false;
             //this.$emit('close');
           },
              
           onFileChange(e) {
      const file = e.target.files[0];
      console.log(file);
      this.filename =file.name;
      this.filePath = file; 
      
      this.url = URL.createObjectURL(file);
    },
     addPostWithImage(e) {
        console.log("clicked");
        this.loading = true;
        
       const result = Storage.put(this.filename, this.filePath, {
          
           contentType:this.filePath.type,
    progressCallback(progress) {
        if(`${progress.loaded}` === `${progress.total}` ){
          
         
      
        }
        console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
  },
}).then((result) =>{
    this.addPostToDb();
})
    },
   async addPostWithoutImage(e){
         const uuid = uuidv4();
               const {userId,postText,postTitle,image} = this;
              
               const post = {id:uuid,userId:userId,postText,title:postTitle,postType:"BUSINESS",postStatus:"CREATED",image};
               
               await API.graphql({
                   query:createPost,
                   variables:{input:post},
               }).then((result) =>{
                   console.log("result is"+result);
                   this.loading = false;
               })
               console.log("successfully uploaded");
               this.postText = "";
               this.loading = false;
    }

         }
        
    }
</script>

<style lang="scss" scoped>


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
  flex-basis: 30%;
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
    flex-basis: 60%;
    height: 100%;
    display: flex;
    
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
     
   
    
}
.img-container{
    height: 40%;
    width: 80%;
  
    display: flex;
    
    flex-direction: column;
    
}
#preview-pic{
    margin-top: 20px;
   
    width: 100%;
    height: 80%;
   
}
.postTitle{
    width: 80%;
    height: 50px;
    padding: 0px 10px;

}
.postpic{
    width: 100%;
    height: 80%;
    object-fit: cover;
}
 .article{
   width: 80%;
   margin-top: 50px;
   display: flex;
   padding: 10px 10px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
    &__post{
      width: 80%;
      height: 30%;
      outline: none;
      resize: none;
 
 
  background-color: white;
  padding: 10px 10px; 
  font-size: 16px;
      margin-top: 20px;
  
    }
   
    &__btn{
     width: 80%;
     height: 50px;
     background-color: black;
     color: white;
     border:none;
    }
       &__btn:hover{
        background-color: #c2dddf;
    }
  }
.checkbox{
    align-self:flex-start;
    
    margin-left: 60px;
}
.noImageCheck{
    width: 20px;
    height: 20px;
}
.noImage{
    font-size: 20px;
   
}
.pickImage{
    margin-top: 20px;
padding-bottom: 30px;


    align-self: flex-start;

}



</style>