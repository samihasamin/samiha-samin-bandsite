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
commentForm.addEventListener("submit", function (event) {
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
    commentForm.reset();
  }
});

const userComments = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves deserves reverance. Let us apprexiate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabera",
    date: "10/28/2023",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    text: "I cannot stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Cannot get enough.",
  },
];

// Comment container

const commentContainer = document.createElement("div");
commentContainer.classList.add("comments__users");

comments.appendChild(commentContainer);

userComments.forEach((userComment) => {
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
  userName.textContent = userComment.name;

  //Create date

  const userDate = document.createElement("p");
  userDate.classList.add("comments__users-textbox-content-nameanddate-date");
  userDate.textContent = userComment.date;

  // Create text

  const userText = document.createElement("p");
  userText.classList.add("comments__users-textbox-content-text");
  userText.textContent = userComment.text;

  nameAndDate.appendChild(userName);
  nameAndDate.appendChild(userDate);
  eachComment.appendChild(userText);

  userAvatardiv.appendChild(commentAvatar);
  commentTextbox.appendChild(eachComment);

  commentContainer.appendChild(commentTextbox);
});
