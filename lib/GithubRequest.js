function GithubRequest(){
  var githubRequest = this;

  githubRequest.returnObject = {
    name: "",
    url: "",
    public_repos: "",
    login: "",
    avatar_url: "",
    repos_url: ""
  }
  githubRequest.getData = function() {

    $.ajax({
      url: "https://api.github.com/users/ernestodls",
      success: function(res){
        githubRequest.name = res.name;
      }

    });
  }
}

  module.exports = GithubRequest;
