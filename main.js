window.onload = () => {

  /**
   * @function init
   * Initializes the application
   */
  const init = () => {

    debug = true;

    /**
     * @function isEmpty
     * Checks if an item is empty (true) or not (false)
     * @param {any} item - parâmetro a ser analisado
     * @returns true|false
     */
    const isEmpty = item => {
      let result = true;
      if (
        item !== undefined
        && item !== ''
        && item !== null
        && ((Number.isInteger(item) && item >= 0) || item.length > 0)) {
        result = false;
      } else {
        let itemStr = JSON.stringify(item)
        result = itemStr !== undefined && itemStr.replace(/{|}|\[|\]|"|'|`|null/g, '').length > 0 ? false : true
      }
      return result;
    }

    /**
     * @function sanitizeStr
     * Returns sanitized and formatted string according to the second passed argument
     * 
     * @param {String} str - String to be sanitzed
     * @param {String} type - Type of sanitazation purpose
     * 
     * @returns a formatted string
     * 
     * @example sanitizeStr('Aá  34') // returns 'Aa 34'
     * @example sanitizeStr('Aá  34', 'class') // returns 'aa-34'
     * @example sanitizeStr('Aá  34', 'id') // returns 'aa_34'
     * @example sanitizeStr('Aá  34', 'text') // returns 'Aá 34'
     */
    const sanitizeStr = (str, type = 'default') => {

      let newStr = str,
        originalStr = str,
        validators = [];

      const spacesConsecutive = [/\s{2,}/g, ' '],
        accentuationVowelA = [/à|ã|â|ä|á/g, 'a'],
        accentuationVowelAUpper = [/À|Ã|Â|Ä|Á/g, 'A'],
        accentuationVowelE = [/è|ê|ë|é/g, 'e'],
        accentuationVowelEUpper = [/È|Ê|Ë|É/g, 'E'],
        accentuationVowelI = [/ì|î|ï|í/g, 'i'],
        accentuationVowelIUpper = [/Ì|Î|Ï|Í/g, 'I'],
        accentuationVowelO = [/ò|õ|ô|ö|ó/g, 'o'],
        accentuationVowelOUpper = [/Ò|Õ|Ô|Ö|Ó/g, 'O'],
        accentuationVowelU = [/ù|û|ü|ú/g, 'u'],
        accentuationVowelUUpper = [/Ù|Û|Ü|Ú/g, 'U'],
        accentuationC = [/ç/g, 'c'],
        accentuationCUpper = [/Ç/g, 'C'],
        accentuationN = [/ñ/g, 'n'],
        accentuationNUpper = [/Ñ/g, 'N'],
        notAlfaNum = [/[^\d|\w|\s|-]/gi, ''],
        spaceAny = [/\s/g],
        duplicatedHyphens = [/-{2,}/g, '-'],
        duplicatedUnderlines = [/_{2,}/g, '_'],
        hyphenToUnderline = [/-/g, '_'],
        underlineToHyphen = [/_/g, '-'];

      defaultValidation = () => validators.push(spacesConsecutive, accentuationVowelA, accentuationVowelAUpper, accentuationVowelE, accentuationVowelEUpper, accentuationVowelI, accentuationVowelIUpper, accentuationVowelO, accentuationVowelOUpper, accentuationVowelU, accentuationVowelUUpper, accentuationC, accentuationCUpper, accentuationN, accentuationNUpper, notAlfaNum, spaceAny, spacesConsecutive, duplicatedHyphens, duplicatedUnderlines);

      switch (type) {
        case 'text':
          validators.push(spacesConsecutive);
          break;
        case 'class':
          str = str.toLowerCase();
          spaceAny.push('-');
          validators.unshift(underlineToHyphen);
          defaultValidation();
          break;
        case 'id':
          spaceAny.push('_');
          validators.unshift(hyphenToUnderline);
          defaultValidation();
          break;
        case 'default':
        default:
          spaceAny.push(' ');
          defaultValidation();
      }

      for (validator of validators) {
        if (type === 'class') { newStr = newStr.toLowerCase(); };
        newStr = newStr.replace(validator[0], validator[1]);
        if (type === 'class') { newStr = newStr.toLowerCase(); };
      }
      return newStr;
    }

    const queryParamsData = {
      alcoholic: '',
      alcoholicList: false,
      category: '',
      categoryList: false,
      glass: '',
      glassList: false,
      ingredient: '',
      ingredientId: '',
      ingredientDetail: false,
      drinkId: '',
      firstLetter: '',
      nameSearch: '',
    }

    const drinkData = {
      id: '',
      drink: '',
      category: '',
      IBA: '',
      alcoholic: '',
      glass: '',
      instructions: '',
      thumb: '',
      ingredients: [],
    }

    const ingredientData = {
      id: '',
      ingredient: '',
      description: '',
      type: '',
      alcohol: '',
      ABV: '',
    }

    const dataModels = {
      queryParams: queryParamsData,
      drink: drinkData,
      drinks: [],
      ingredient: ingredientData,
      ingredients: [],
      lists: {
        categories: [],
        alcoholic: [],
        glasses: [],
      },
    }

    let dataStored = dataModels;
    let dataTemp = undefined;

    const storeData = (k = undefined, v = undefined) => {
      switch (true) {
        case (k === 'init'):
          localStorage.clear();
          localStorage.setItem('dataModels', JSON.stringify(dataModels));
          localStorage.setItem('dataStored', JSON.stringify(dataModels));
          localStorage.setItem('dataTemp', '');
          dataStored = dataModels;
          dataTemp = ''; return dataStored ? dataStored : localStorage.dataStored ? localStorage.dataStored : console.log('localStorage init | error');
        case k === 'update':
          localStorage.setItem('dataStored', JSON.stringify(dataStored));
          return localStorage.getItem('dataStored');
        case k === undefined:
        case k === 'all':
          return dataStored;
        case k === 'last':
        case k === 'temp':
          return dataTemp;
        case k === 'models':
          return dataModels;
        case k === undefined && v !== undefined:
          console.log(`Ops! Parece que está tentando salvar ${v} mas não definiu aonde...`);
          return;
        case k === 'clear' && v !== undefined && v !== 'dataModels' && (v === 'dataStored' || v === 'dataTemp'):
        case k === 'reset' && v !== undefined && v !== 'dataModels' && (v === 'dataStored' || v === 'dataTemp'):
          localStorage.removeItem(v);
          localStorage.setItem(v, JSON.stringify(dataModels[v]));
          v = dataModels[v];
          return dataStored;
        case k === 'clear':
        case k === 'reset':
          storeData('init');
          dataStored = '';
          dataTemp = '';
          return;
        case k !== undefined && v === undefined:
          return localStorage.getItem(k) ? JSON.parse(localStorage.getItem(k)) : console.error(`Chave ${k} não encontrada`);
        case k !== undefined && v !== undefined && k === 'dataModels':
          console.log(`Ops! Parece que está tentando alterar o ${k} mas não tem permissões... Por favor, entre em contato conosco. Obrigado!`);
          return;
        default:
          console.log(`default | k = ${k}, v = ${v}`);
          return localStorage;
      }
    }

    const resultadosDrinksMain = document.querySelector('#resultsMain');
    const limparResultadosDrinks = () => resultadosDrinksMain.innerHTML = '';

    const makeDrinkHtml = ({ idDrink, strAlcoholic, strCategory, strDrink, strDrinkThumb, strGlass, strInstructions }, unique = false) => {
      let uni = (unique !== true) ? 'col-md-6 col-xl-4 not-unique' : 'unique';
      let html = `
        <article id="drinkItem_${idDrink}" class="col-12 ${uni} mt-1 p-3 drinks-result-item">
          <div class="border rounded p-3 h-100 mx-auto">
            <span id="drinkItemId_${idDrink}" class="badge badge-dark badge-pill text-warning d-inline-block ml-auto">#${idDrink}</span>
            <header class="col-12 drinks-result-header">
              <img src="${strDrinkThumb}" alt="Drink Thumb" width="100" height="100"
                class="d-block mx-auto my-2 rounded-circle border-warning">
              <h3 id="drinkItemTitle_${idDrink}" class="drink-result-title text-center drink-name">${strDrink}</h3>
      `;
      if (strInstructions !== undefined) {
        html += `
              <div class="d-flex flex-row flex-wrap ${unique ? 'justify-content-center' : 'justify-content-around'} align-items-center">
                <span class="badge badge-warning badge-pill m-2" onclick="getDrinksByCategory('${strCategory}')">${strCategory}</span>
                <span class="badge badge-warning badge-pill m-2" onclick="getDrinksByAlcoholic('${strAlcoholic}')">${strAlcoholic}</span>
              </div>
        `;
      }
      html += `
            </header>
      `;
      if (strInstructions !== undefined) {
        html += `
            <hr class="offset-2 col-8 my-4 border-black-50">
            <div class="col-12 drinks-result-content">
              <h4>Receita</h4>
              <p id="drinkItemInstructions_${sanitizeStr(idDrink)}" class="drinks-result-instruction drinks-result-instruction-${sanitizeStr(idDrink)}">${strInstructions}</p>
              <h4>Informações Extra</h4>
              <ul class="list-unstyled">
                <li>Copo: <span class="drinks-result-item drinks-result-glass glass-${sanitizeStr(strGlass)}">${strGlass}</span></li>
                <li>Categoria: <span class="drinks-result-item drinks-result-category drinks-result-category-${sanitizeStr(strCategory)}" onclick="getDrinksByCategory('${strCategory}')">${strCategory}</span></li>
                <li>Álcool: <span class="drinks-result-item drinks-result-alcoholic drinks-result-alcoholic-${sanitizeStr(strAlcoholic)}" onclick="getDrinksByAlcoholic('${strAlcoholic}')">${strAlcoholic}</span></li>
              </ul>
            </div>
        `;
      } else {
        html += `
            <hr class="offset-2 col-8 my-4 border-black-50">
            <div class="col-12 drinks-result-content">
              <button type="button" class="btn btn-warning border border-rounded border-dark w-100"
                onclick="getDrinksByName('${strDrink}')">Ver detalhes</button>
            </div>
        `;
      }
      html += `
          </div>
        </article>
      `;
      resultadosDrinksMain.innerHTML += html;
    }

    const setUrl = (q = dataStored.queryParams) => {

      let argument = [];
      argument = [];
      for (arg in q) {
        if (!isEmpty(q[arg]) && q[arg] !== false)
          argument = [arg, q[arg]];
      }

      let urlData = {
        base: 'https://www.thecocktaildb.com/api/json/v1/1/',
        filterBase: 'filter.php?',
        lookupBase: 'lookup.php?',
        searchBase: 'search.php?',
        listBase: 'list.php?',
        randomBase: 'random.php',

        alcoholicQuery: q.alcoholic ? `a=${q.alcoholic}` : '',
        categoryQuery: q.category ? `c=${q.category}` : '',
        glassQuery: q.glass ? `g=${q.glass}` : '',
        ingredientQuery: q.ingredient ? `i=${q.ingredient}` : '',

        ingredientIdQuery: q.ingredientId ? `iid=${q.ingredientId}` : '',
        drinkIdQuery: q.drinkId ? `?i=${q.drinkId}` : '',

        alcoholicListQuery: q.alcoholicList ? 'a=list' : '',
        categoryListQuery: q.categoryList ? 'c=list' : '',
        glassListQuery: q.glassList ? 'g=list' : '',

        firstLetter: q.firstLetter ? `f=${q.firstLetter}` : '',
        nameSearch: q.nameSearch ? `s=${q.nameSearch}` : '',
      };

      let resultantUrl = '';
      let urlBaseType = '';
      let urlQueries = '';
      let queryType = '';

      switch (true) {
        case argument[0] === 'alcoholicList':
        case argument[0] === 'categoryList':
        case argument[0] === 'glassList':
          urlBaseType = urlData.listBase;
          queryType = 'list';
          urlQueries = urlData[argument[0] + 'Query'];
          break;
        case argument[0] === 'alcoholic':
        case argument[0] === 'category':
        case argument[0] === 'glass':
          urlBaseType = urlData.filterBase;
          queryType = 'filter';
          urlQueries = urlData[argument[0] + 'Query'];
          break;
        case argument[0] === 'nameSearch':
        case argument[0] === 'firstLetter':
        case argument[0] === 'ingredient':
          urlBaseType = urlData.searchBase;
          queryType = 'search';
          urlQueries = argument[0] === 'ingredient' ? urlData[argument[0] + 'Query'] : urlData[argument[0]];
          break;
        case argument[0] === 'drinkId':
        case argument[0] === 'ingredientId':
          urlBaseType = urlData.lookupBase;
          queryType = 'lookup';
          urlQueries = urlData[argument[0] + 'Query'];
          break;
        case argument[1] === null:
        case argument[1] === undefined:
        case argument[1] === '':
        case argument[1] === false:
        default:
          urlBaseType = urlData.randomBase;
          break;

      }

      resultantUrl = urlData.base + urlBaseType + urlQueries;

      return resultantUrl;
    }

    const setQueryParams = (type, params) => {
      for (param in queryParamsData) {
        if (param === type) {
          queryParamsData[param] = params;
          dataStored.queryParams = queryParamsData;
          storeData('update');
        } else {
          queryParamsData[param] === true || queryParamsData[param] === false
            ? queryParamsData[param] = false
            : queryParamsData[param] = '';
        }
      }
      let url = setUrl(queryParamsData);

      return url;
    }

    const getOptions = url => {
      return fetch(url)
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(json => {

          let response = JSON.stringify(json.drinks);

          switch (true) {
            case /c=list/.test(url):
              dataStored.lists.categories = response;
              for (item of json.drinks) {
                let optionItem = document.createElement('OPTION');
                optionItem.setAttribute('value', item.strCategory);
                optionItemText = document.createTextNode(item.strCategory);
                optionItem.appendChild(optionItemText);
                document.querySelector('#category').appendChild(optionItem)
              }
              break;
            case /g=list/.test(url):
              dataStored.lists.glasses = response;
              for (item of json.drinks) {
                let optionItem = document.createElement('OPTION');
                optionItem.setAttribute('value', item.strGlass);
                optionItemText = document.createTextNode(item.strGlass);
                optionItem.appendChild(optionItemText);
                document.querySelector('#glass').appendChild(optionItem)
              }
              break;
            case /a=list/.test(url):
              dataStored.lists.alcoholic = response;
              for (item of json.drinks) {
                let optionItem = document.createElement('OPTION');
                optionItem.setAttribute('value', item.strAlcoholic);
                optionItemText = document.createTextNode(item.strAlcoholic);
                optionItem.appendChild(optionItemText);
                document.querySelector('#alcoholic').appendChild(optionItem)
              }
              break;
            default:
              return;
          }

          storeData('update');
          return response;
        })
    }

    const getDrinksAlcoholicOptions = () => {
      let url = setQueryParams('alcoholicList', true);
      localStorage.setItem('subjectSearch', `lista de classificação em termos de álcool`);
      getOptions(url);
    }
    getDrinksAlcoholicOptions();

    const getDrinksCategoryOptions = () => {
      let url = setQueryParams('categoryList', true);
      localStorage.setItem('subjectSearch', `lista de categorias de drinks`);
      getOptions(url);
    }
    getDrinksCategoryOptions();

    const getDrinksGlassOptions = () => {
      let url = setQueryParams('glassList', true);
      localStorage.setItem('subjectSearch', `lista de tipos de copos`);
      getOptions(url);
    }
    getDrinksGlassOptions();

    const getDrinks = url => {
      return fetch(url)
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(json => {

          let drinksResults = document.querySelector('#resultsMain');
          scrollTo(0, drinksResults.offsetTop);

          let response = /random/.test(url) ? json.drinks[0] : json.drinks;
          dataStored.drinks = response;

          for (param in dataStored.queryParams) {
            dataStored.queryParams[param] === true || dataStored.queryParams[param] === false
              ? dataStored.queryParams[param] = false
              : dataStored.queryParams[param] === '';
          };

          storeData('update');
          return response;
        })
        .then(drinks => {
          limparResultadosDrinks();
          if (drinks.length > 1) {
            for (drink of drinks) {
              makeDrinkHtml(drink);
            };
          } else if (drinks.length === 1) {
            makeDrinkHtml(drinks[0], true);
          } else if (drinks.length === undefined) {
            makeDrinkHtml(drinks, true);
          } else {
            makeDrinkHtml(drinks);
          }
          return drinks;
        });
    }

    getDrinksByName = (name = 'Capirinha') => {
      let url = setQueryParams('nameSearch', name);
      localStorage.setItem('subjectSearch', `drinks com nome \'${name}\'`);
      getDrinks(url);
    }

    getDrinksByCategory = (option = 'Ordinary Drink') => {
      let url = setQueryParams('category', option);
      localStorage.setItem('subjectSearch', `drinks categorizados como \'${option}\'`);
      getDrinks(url);
    }

    getDrinksByFirstLetter = (firstLetter = 'A') => {
      let url = setQueryParams('firstLetter', firstLetter);
      localStorage.setItem('subjectSearch', `drinks com começam com \'${firstLetter}\'`);
      getDrinks(url);
    }

    getDrinksByGlass = (option = 'Shot glass') => {
      let url = setQueryParams('glass', option);
      localStorage.setItem('subjectSearch', `drinks por tipo de copo \'${option}\'`);
      getDrinks(url);
    }

    storeData();
  };

  init();

}