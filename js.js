var link = {
  setColor: function (color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
}
}
var Body = {
  bodySetColor: function (color){
    document.querySelector('body').style.color = color;
  },
  bodyBackColor: function (color){
    document.querySelector('body').style.backgroundColor = color;
  }

  }

  function nightDayHandler(self){
  //var target = document.querySelector('body');
    if(self.value === 'night') {
      Body.bodyBackColor ('black');
      Body.bodySetColor ('white');
      self.value = 'day';

      link.setColor('powderblue');
    }
    else {
      Body.bodyBackColor ('white');
      Body.bodySetColor ('black');
      self.value = 'night';

      link.setColor('blue');
    }
  }
