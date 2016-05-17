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
        githubRequest.login = res.login;
        githubRequest.public_repos = res.public_repos;
        githubRequest.avatar_url = res.avatar_url;
        githubRequest.repos_url = res.repos_url;
        githubRequest.url = res.url;
      }


    });
  }
}

  module.exports = GithubRequest;
