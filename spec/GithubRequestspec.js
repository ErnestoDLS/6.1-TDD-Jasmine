jsdom = require("jsdom")

describe("Github Request Spec", function(){
  var GithubRequest = require("../lib/GithubRequest");
  var githubRequest;

  beforeEach(function(){
    githubRequest = new GithubRequest();
    document = jsdom.jsdom('<body></body>');
    window = document.defaultView;
    $ = require('jquery');
  });

  it("Parses name", function(){
    githubRequest.getData();
    setTimeout(function(){
      expect(githubRequest.returnObject.name).toEqual("Ernesto De Los Santos");
    },5000);
  });

  it("Parses url", function(){
    githubRequest.getData()
    setTimeout(function(){
      expect(githubRequest.returnObject.url).toEqual("https://api.github.com/users/ErnestoDLS");
    },5000);
  });

  it("Parses repos", function(){
    githubRequest.getData()
    setTimeout(function(){
      expect(githubRequest.returnObject.public_repos).toEqual(19);
    },5000);
  });

  it("Parses login", function(){
    githubRequest.getData();
    setTimeout(function(){
      expect(githubRequest.returnObject.login).toEqual("ErnestoDLS");

    },5000);
  });

  it("Parses avatar url", function(){
    githubRequest.getData()
    setTimeout(function(){
      expect(githubRequest.returnObject.avatar_url).toEqual("https://avatars.githubusercontent.com/u/17814442?v=3");

    },5000);
  });

  it("Requests data from URL", function(){
    spyOn(githubRequest, "getData");
    githubRequest.getData("https://api.github.com/users/ernestodls");
    expect(githubRequest.getData).toHaveBeenCalledWith("https://api.github.com/users/ernestodls");
  });
});
