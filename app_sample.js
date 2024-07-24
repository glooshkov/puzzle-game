
/*
 * это генерим простой уровень, дальше должны подгружать из другого модуля (админки-сервера)
 * Идёт заплнение массива app.puzz
 */
app.generateSampleLevel = function(){
  //тут будет список id и их будем отсюда брать для заполнения
  cardIds = [];
  // тут заведомо мы в курсе сколоько плиток всего на поле. 58*3. но при более сложной генерации нужно считать из данных массива будет.
  for(var i=0; i<58; i++){
    var rand_id = app.getRandomCardId();
    // добавляем три раза, т.к. кратно трём игра
    cardIds.push(rand_id);
    cardIds.push(rand_id);
    cardIds.push(rand_id);
  }
  shuffle(cardIds);

  app.puzz = {};

  var level = 0;
  app.puzz[level] = [];
  for(var y = 0; y<8*2; y+=2){
    if(!app.puzz[level][y]) app.puzz[level][y] = []; //

    for(var x = 0; x<8*2; x+=2){
      app.puzz[level][y][x] = [];
      app.puzz[level][y][x] = {'card_id': cardIds.pop()};
    }
  }
  // level 1;
  var level = 1;
  app.puzz[level] = [];
  for(var y = 1; y<7*2+1; y+=2){
    if(!app.puzz[level][y]) app.puzz[level][y] = []; //

    for(var x = 1; x<7*2+1; x+=2){
      app.puzz[level][y][x] = [];
      app.puzz[level][y][x] = {'card_id': cardIds.pop()};
    }
  }
  // level 2;
  var level = 2;
  app.puzz[level] = [];
  for(var y = 2; y<6*2+2; y+=2){
    if(!app.puzz[level][y]) app.puzz[level][y] = []; //

    for(var x = 2; x<6*2+2; x+=2){
      app.puzz[level][y][x] = [];
      app.puzz[level][y][x] = {'card_id': cardIds.pop()};
    }
  }
  // level 3;
  var level = 3;
  app.puzz[level] = [];
  for(var y = 3; y<5*2+3; y+=2){
    if(!app.puzz[level][y]) app.puzz[level][y] = []; //

    for(var x = 3; x<5*2+3; x+=2){
      app.puzz[level][y][x] = [];
      app.puzz[level][y][x] = {'card_id': cardIds.pop()};
    }
  }

  console.log('generateSampleLevel', app.puzz);

  return;
}


