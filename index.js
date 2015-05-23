
hexo.extend.tag.register('papitag', function(args, content){	
  var className =  args.join(' ');
  return '<blockquote class="pullquote2' + className + '">' + content + '</blockquote>';
}, {ends: true});