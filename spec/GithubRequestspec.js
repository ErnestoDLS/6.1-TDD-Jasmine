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
    expect(githubRequest.returnObject.name).toEqual("Ernesto De Los Santos");
  });

  // it("Parses url", function(){
  //   expect(githubRequest.returnObject.url).toEqual("https://api.github.com/users/ErnestoDLS");
  // });
  //
  // it("Parses repos", function(){
  //   expect(githubRequest.returnObject.public_repos).toEqual(19);
  // });
  //
  // it("Parses login", function(){
  //   expect(githubRequest.returnObject.login).toEqual("ErnestoDLS");
  // });
  //
  // it("Parses avatar url", function(){
  //   expect(githubRequest.returnObject.avatar_url).toEqual("https://avatars.githubusercontent.com/u/17814442?v=3");
  // });
  //
  // it("Requests data from URL", function(){
  //   spyOn(githubRequest, "getData");
  //   githubRequest.getData("https://api.github.com/users/ernestodls");
  //   expect(githubRequest.getData).toHaveBeenCalledWith("https://api.github.com/users/ernestodls");
  // });
});
