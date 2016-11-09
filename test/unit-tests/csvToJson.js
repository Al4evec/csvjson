var csvjson = require('../../index');
var fs      = require('fs');
var assert  = require('chai').assert;
var path    = require('path');

describe('csvjson unit test', function() {
  it('sample file, "," as delimiter', function(done) {
    var options = { encoding : 'utf8', delimiter: ','};
    var data = fs.readFileSync(path.join(__dirname, 'sample.csv'), options.encoding);
  	var actual = csvjson.toObject(data, options);
  	var expected = [{'sr':'1', 'name':'rocky', 'age': '33', 'gender': 'male'},
  					{'sr':'2', 'name':'jacky', 'age': '22', 'gender': 'male'},
  					{'sr':'3', 'name':'suzy', 'age': '21', 'gender': 'female'}]
    assert.deepEqual(actual, expected);
    done();
  });
  it('sample file, ";" as delimiter', function(done) {
  	var options = { encoding : 'utf8', delimiter: ';'};
    var data = fs.readFileSync(path.join(__dirname, 'sample-semicolon.csv'), options.encoding);
    var actual = csvjson.toObject(data, options);
    var expected = [{'sr':'1', 'name':'rocky', 'age': '33', 'gender': 'male'},
            {'sr':'2', 'name':'jacky', 'age': '22', 'gender': 'male'},
            {'sr':'3', 'name':'suzy', 'age': '21', 'gender': 'female'}]
    assert.deepEqual(actual, expected);
    done();
  });
  it('sample_multi_old file, ";" as delimiter', function(done) {
    var options = { encoding : 'utf8', delimiter: ','};
    var data = fs.readFileSync(path.join(__dirname, 'sample_multi_old.csv'), options.encoding);
    var actual = csvjson.toObject(data, options);
    var expected = [{'sr':'1', 'name':'rocky', 'age': '33', 'gender': '\"Ma\nLe\"'},
            {'sr':'2', 'name':'jacky', 'age': '22', 'gender': 'male'},
            {'sr':'3', 'name':'\"Su\nZy\"', 'age': '21', 'gender': 'female'}]
    assert.deepEqual(actual, expected);
    done();
  });
  it('sample_multi_short file, ";" as delimiter', function(done) {
    var options = { encoding : 'utf8', delimiter: ';'};
    var data = fs.readFileSync(path.join(__dirname, 'sample_multi_short.csv'), options.encoding);
    var actual = csvjson.toObject(data, options);
    var expected = [{'Ver.': '', 'Screen_ID': '1', 'Element_ID': '1', 'Russian': ''},
                    {'Ver.': '', 'Screen_ID': '1', 'Element_ID': '2', 'Russian': 'АРУК 50'},
                    {'Ver.': '', 'Screen_ID': '2', 'Element_ID': '5', 'Russian': '\"Температура\nрасплава\"'},
                    {'Ver.': '', 'Screen_ID': '6', 'Element_ID': '28', 'Russian': '\"НУЛЕВАЯ ПОЗИЦИЯ\nПОДВОДЯЩЕГО КОНВ., мм\"'},
                    {'Ver.': '', 'Screen_ID': '6', 'Element_ID': '33', 'Russian': '\"ПРОТЯЖКА\nПОДВОДЯЩЕГО\nКОНВЕЙЕРА\"'},
                    {'Ver.': '', 'Screen_ID': '6', 'Element_ID': '55', 'Russian': '\"ЗАДЕРЖКА ОПУСКАНИЯ\nФИКСАТОРА\nВНУТР. КЛАПАНА, мс\"'},
                    {'Ver.': '', 'Screen_ID': '10', 'Element_ID': '22', 'Russian': '\" Т1 - Устройство заклейки нижнего клапана. Температура расплава клея.\n Т2 - Устройство заклейки нижнего клапана. Температура поддержания \n клея в расплавленном сосоянии.\n Т3 - Устройство заклейки верхнего клапана. Температура расплава клея.\n Т4 - Устройство заклейки верхнего клапана. Температура поддержания \n клея в расплавленном сосоянии.\"'}]
    assert.deepEqual(actual, expected);
    done();
  });
});

