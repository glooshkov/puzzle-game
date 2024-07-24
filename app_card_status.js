
// тут функции для работы со статусом карточек
app.cardStatus = {};

/*
 * Пересчитать статусы в текущем массиве app.puzz
 */
app.cardStatus.recalculate = function(){
  // Обновляем все плитки, выставляем что все доступны
  app.cardStatus.setAllAllow();

  //Инвертируем массив с уровнями и делаем цикл…
  var level_keys = Object.keys(app.puzz);
  lavel_keys = level_keys.reverse();

  for(var key in lavel_keys){ //в key ключ массива, а не сам уровнь
    var level_key = lavel_keys[key]; // тут сам номер уровеня хранится
    //console.log('view level_key:'+level_key);

    for(var y in app.puzz[level_key]){
      for(var x in app.puzz[level_key][y]){
        app.cardStatus.setDisabledByFilter(level_key, y, x);
      }
    }
    //--
  }
  return;
};


/*
 * Обновляем все плитки в app.puzz и выставляем что все доступны
 */
app.cardStatus.setAllAllow = function(){
  for(var level in app.puzz){
    for(var y in app.puzz[level]){
      for(var x in app.puzz[level][y]){
        var past = (app.puzz[level][y][x].status) ?? 1; // если есть значение статуса, берём его, если нет - берём по умолчанию 1

        app.puzz[level][y][x].status = 1;
        app.puzz[level][y][x].past_status = past; // прошлый статус, нужно для ускорения перерисовки карточек
      }
    }
  }
  return;
};

app.cardStatus.setDisabledByFilter = function(level_below_this, input_y, input_x){
  //console.log('------------------------------------');
  //console.log('input: level_below_this: '+level_below_this+', input_y: '+input_y+', input_x: '+input_x);
  //console.log('------------------------------------');
  for(var level in app.puzz){
    if(level<level_below_this){
      for(var y in app.puzz[level]){
        for(var x in app.puzz[level][y]){

          y = parseInt(y);
          x = parseInt(x);
          input_y = parseInt(input_y);
          input_x = parseInt(input_x);

          if(
            (x == input_x && y == input_y)
            || (x == input_x-1 && y == input_y)
            || (x == input_x && y == input_y-1)
            || (x == input_x-1 && y == input_y-1)

            || (x == input_x+1 && y == input_y-1)
            || (x == input_x-1 && y == input_y+1)
            || (x == input_x+1 && y == input_y+1)
            || (x == input_x+1 && y == input_y)
            || (x == input_x && y == input_y+1)
          ){
              app.puzz[level][y][x].status = 0;
              //console.log('disable. level:'+level+', y:'+y+', x:'+x+'. // input: level_below_this: '+level_below_this+', input_y: '+input_y+', input_x: '+input_x);
          }//else{
            //console.log('NOT. level:'+level+', y:'+y+', x:'+x+'. // input: level_below_this: '+level_below_this+', input_y: '+input_y+', input_x: '+input_x);
          //}
        }
      }
    }
  }
  return;
};
