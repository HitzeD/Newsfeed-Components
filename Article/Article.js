// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement

    this.domElement = domElement;

    // create a reference to the ".expandButton" class.

    this.expandButton = this.domElement.querySelector('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"

    this.expandButton.textContent = 'expand';
    this.expandArticle = this.expandArticle.bind(this);

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    
    this.expandButton.addEventListener('click', this.expandArticle);
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    // TweenMax.to(this.domElement, 2, {power1});
  }
}

class ArtBuilder {
  constructor(article, head) {
    this.article = article;
    this.head = head;
    this.newArt = document.createElement('div');
    this.newHead = document.createElement('h2');
    this.newTime = new Date();
    this.newPara = document.createElement('p');
    this.newBtn = document.createElement('span');
  }

  create(){
    this.newArt.appendChild(this.newHead, this.newTime, this.para, this.newBtn);
    this.newhead.textContent = this.head;
    this.newArt.setAttribute('class','article');
    this.newBtn.setAttribute('class', 'expandButton');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to 
  the articles variable.  

- With your selection in place, now chain .forEach() on to the 
  articles variable to iterate over the articles NodeList and 
  create a new instance of Article by passing in each article 
  as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
// console.log(articles);
articles.forEach(function(article){
  new Article(article);
})


new ArtBuilder(article, 'who did it?');