<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{title}}</title>
</head>
<style>
  ul{width: 90%;margin: 0 auto;padding: 0;}
  li{width: 49.5%; display: inline-block; text-align: left;margin: 0; padding: 0;box-sizing: border-box;list-style: none;}
  li:hover{background-color: #aaa;}
  a{display: block;line-height: 2;font-size: 20px;}
</style>
<body>
  <ul>
    {{#each files}}
      <li><a href="{{../dir}}/{{file}}">{{file}}</a></li>
    {{/each}}
  </ul>
  
</body>
</html>