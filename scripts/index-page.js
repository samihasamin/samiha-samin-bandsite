import BandSiteApi from "./bandsite-api.js";

const API_KEY = "3696c394-752b-4ce8-92d2-857ffb646b8d";

const comments = document.querySelector(".comments");

const commentHeader = document.createElement("h1");
commentHeader.classList.add("comments__header");
commentHeader.textContent = "Join the Conversation";
comments.appendChild(commentHeader);

const commentForm = document.createElement("form");
commentForm.classList.add("comments__form");
comments.appendChild(commentForm);

const nameContainer = document.createElement("div");
nameContainer.classList.add("comments__form-group-one");
commentForm.appendChild(nameContainer);

const avatarImage = document.createElement("img");
avatarImage.setAttribute("src", "../assets/images/Mohan-muruge.jpg");
avatarImage.classList.add("comments__form-group-one-avatar");
nameContainer.appendChild(avatarImage);

const messageContainer = document.createElement("div");
messageContainer.classList.add("comments__form-group-two");

const nameDiv = document.createElement("div");
nameDiv.classList.add("comments__form-group-two-namesection");

const messageDiv = document.createElement("div");
messageDiv.classList.add("comments__form-group-two-messagesection");

const nameLabel = document.createElement("label");
nameLabel.setAttribute = ("for", "fullname");
nameLabel.classList.add("comments__form-group-two-namesection-label");
nameLabel.textContent = "NAME";
nameDiv.appendChild(nameLabel);

const nameInput = document.createElement("input");
nameInput.classList.add("comments__form-group-two-namesection-nameinput");
nameInput.setAttribute("id", "fullname");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "Enter your name");
nameDiv.appendChild(nameInput);

const messageLabel = document.createElement("label");
messageLabel.setAttribute("for", "message");
messageLabel.classList.add("comments__form-group-two-messagesection-label");
messageLabel.textContent = "COMMENT";

const messageInput = document.createElement("textarea");
messageInput.classList.add("comments__form-group-two-messagesection-message");
messageInput.setAttribute("id", "message");
messageInput.setAttribute("placeholder", "Add a new comment");
messageInput.setAttribute("name", "message");

messageContainer.appendChild(nameDiv);
messageContainer.appendChild(messageDiv);

const buttonBox = document.createElement("div");
buttonBox.classList.add("comments__form-group-two-buttonbox");
messageContainer.appendChild(buttonBox);

const commentButton = document.createElement("button");
commentButton.classList.add("comments__form-group-two-buttonbox-button");
commentButton.setAttribute("type", "submit");
commentButton.textContent = "COMMENT";

commentForm.appendChild(messageContainer);
messageDiv.appendChild(messageLabel);
messageDiv.appendChild(messageInput);
buttonBox.appendChild(commentButton);

// validation

commentForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  nameInput.style.border = "";
  messageInput.style.border = "";

  let valid = true;

  if (!nameInput.value) {
    nameInput.style.border = "2px solid #d22d2d";

    valid = false;
  }

  if (!messageInput.value) {
    messageInput.style.border = "2px solid #d22d2d";

    valid = false;
  }

  if (valid) {
    const userComment = { name: nameInput.value, comment: messageInput.value };
    const comment = new BandSiteApi(API_KEY);
    //comment.postComment(userComment);
    const response = await comment.postComment(userComment);
    commentForm.reset();
  }
});

async function setComments() {
  const comment = new BandSiteApi(API_KEY);
  await comment.getComments().then((userComment) => {
    userComment.sort((a, b) => b.timestamp - a.timestamp);
    userComment.forEach((postcomment) => {
      console.log(postcomment);
      const commentEl = createCommentElement(
        postcomment.name,
        new Date(),
        postcomment.comment
      );
      commentContainer.appendChild(commentEl);
    });
  });
}

setComments();

// Comment container

const commentContainer = document.createElement("div");
commentContainer.classList.add("comments__users");

comments.appendChild(commentContainer);

function createCommentElement(name, date, text) {
  // Comment text div

  const commentTextbox = document.createElement("div");
  commentTextbox.classList.add("comments__users-textbox");

  // Comment avatar

  const userAvatardiv = document.createElement("div");
  userAvatardiv.classList.add("comments__users-textbox-avatar");
  commentTextbox.appendChild(userAvatardiv);

  const commentAvatar = document.createElement("img");
  commentAvatar.setAttribute("placeholder", "user-avatar");
  commentAvatar.classList.add("comments__users-textbox-avatar-img");

  //Each user container

  const eachComment = document.createElement("div");
  eachComment.classList.add("comments__users-textbox-content");

  const nameAndDate = document.createElement("div");
  nameAndDate.classList.add("comments__users-textbox-content-nameanddate");
  eachComment.appendChild(nameAndDate);

  // Create name

  const userName = document.createElement("h3");
  userName.classList.add("comments__users-textbox-content-nameanddate-name");
  userName.textContent = name;

  //Create date

  const userDate = document.createElement("p");
  userDate.classList.add("comments__users-textbox-content-nameanddate-date");
  userDate.textContent = date;

  // Create text

  const userText = document.createElement("p");
  userText.classList.add("comments__users-textbox-content-text");
  userText.textContent = text;

  nameAndDate.appendChild(userName);
  nameAndDate.appendChild(userDate);
  eachComment.appendChild(userText);

  userAvatardiv.appendChild(commentAvatar);
  commentTextbox.appendChild(eachComment);

  return commentTextbox;
}

// Creating constant border for the navbar bio page

const navLinks = document.querySelectorAll(".navbar__link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => {
      item.classList.remove("active");
      this.classList.add("active");
    });
  });
});
