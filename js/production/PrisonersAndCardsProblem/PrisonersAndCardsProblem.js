if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'PrisonersAndCardsProblem'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'PrisonersAndCardsProblem'.");
}
var PrisonersAndCardsProblem = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var UInt = Kotlin.kotlin.UInt;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var shuffled = Kotlin.kotlin.collections.shuffled_7wnvza$;
  var uintDivide = Kotlin.kotlin.uintDivide_oqfnby$;
  var UIntRange_init = Kotlin.kotlin.ranges.UIntRange;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.ranges.random_7v08js$;
  var uintToDouble = Kotlin.kotlin.uintToDouble_za3lpa$;
  var uintCompare = Kotlin.kotlin.uintCompare_vux9f0$;
  var wrapFunction = Kotlin.wrapFunction;
  var get_parentElement = defineInlineFunction('PrisonersAndCardsProblem.jQueryInterface.get_parentElement_s15u7w$', function ($receiver) {
    return $receiver.parentElement;
  });
  function main$lambda() {
    Setup_getInstance().attachListeners();
    window.setTimeout(getCallableRef('adjustCanvasForCurrentScreen', function ($receiver) {
      return $receiver.adjustCanvasForCurrentScreen(), Unit;
    }.bind(null, Setup_getInstance())), 1000);
    console.log((new PrisonersAndCardsEngine(new UInt(10), new UInt(1))).playOnce());
    return Unit;
  }
  function main() {
    $(main$lambda);
  }
  function Setup() {
    Setup_instance = this;
  }
  function Setup$attachListeners$lambda(this$Setup) {
    return function (it) {
      this$Setup.adjustCanvasForCurrentScreen();
      return Unit;
    };
  }
  function Setup$attachListeners$lambda_0(it) {
    print('Gonna go');
    return Unit;
  }
  Setup.prototype.attachListeners = function () {
    $('html').on('classChange', void 0, Setup$attachListeners$lambda(this));
    $('#begin-button').click(Setup$attachListeners$lambda_0);
  };
  Setup.prototype.adjustCanvasForCurrentScreen = function () {
    var ratio = window.devicePixelRatio;
    var pixelWidth = 800 * ratio;
    var pixelHeight = 600 * ratio;
    var canvasJq = $('#output-canvas');
    canvasJq.css('width', '800');
    canvasJq.css('height', '600');
    canvasJq.attr('width', pixelWidth);
    canvasJq.attr('height', pixelHeight);
    canvasJq.data('pixelWidth', pixelWidth);
    canvasJq.data('pixelHeight', pixelHeight);
    canvasJq.data('pixelRatio', ratio);
  };
  Setup.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Setup',
    interfaces: []
  };
  var Setup_instance = null;
  function Setup_getInstance() {
    if (Setup_instance === null) {
      new Setup();
    }
    return Setup_instance;
  }
  function PrisonersAndCardsEngine(numberOfPrisoners, numberOfTrials, shouldPrisonersStartWithCardsInTheDrawerOfTheirOwnNumber, allowedAttemptsPerPrisoner) {
    if (shouldPrisonersStartWithCardsInTheDrawerOfTheirOwnNumber === void 0)
      shouldPrisonersStartWithCardsInTheDrawerOfTheirOwnNumber = true;
    if (allowedAttemptsPerPrisoner === void 0) {
      allowedAttemptsPerPrisoner = uintDivide(numberOfPrisoners, new UInt(2));
    }
    this.numberOfPrisoners = numberOfPrisoners;
    this.numberOfTrials = numberOfTrials;
    this.shouldPrisonersStartWithCardsInTheDrawerOfTheirOwnNumber = shouldPrisonersStartWithCardsInTheDrawerOfTheirOwnNumber;
    this.allowedAttemptsPerPrisoner = allowedAttemptsPerPrisoner;
  }
  Object.defineProperty(PrisonersAndCardsEngine.prototype, 'numberOfCards', {
    get: function () {
      return this.numberOfPrisoners;
    }
  });
  function PrisonersAndCardsEngine$playOnce$lambda$lambda(this$PrisonersAndCardsEngine, closure$cage) {
    return function (result, prisonerNumber) {
      var currentDrawerNumber = {v: this$PrisonersAndCardsEngine.firstCardNumber_0(prisonerNumber)};
      var $receiver = new UIntRange_init(new UInt(1), this$PrisonersAndCardsEngine.allowedAttemptsPerPrisoner);
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        tmp$_0 = closure$cage.pickCard_s87ys9$(currentDrawerNumber.v);
        if (tmp$_0 == null) {
          var $this = result.lossCount;
          var other = new UInt(1);
          result.lossCount = new UInt($this.data + other.data | 0);
          return Unit;
        }
        var cardNumber = tmp$_0;
        if (cardNumber != null ? cardNumber.equals(prisonerNumber) : null) {
          var $this_0 = result.winCount;
          var other_0 = new UInt(1);
          result.winCount = new UInt($this_0.data + other_0.data | 0);
          return;
        }
         else {
          currentDrawerNumber.v = cardNumber;
        }
      }
      var $this_1 = result.lossCount;
      var other_1 = new UInt(1);
      result.lossCount = new UInt($this_1.data + other_1.data | 0);
      return Unit;
    };
  }
  PrisonersAndCardsEngine.prototype.playOnce = function () {
    var cage = PrisonersAndCardsEngine$PrisonersAndCardsEngine$CardCage_init(this.numberOfPrisoners);
    return reduceMutating(new UIntRange_init(new UInt(1), this.numberOfPrisoners), new PrisonersAndCardsEngine$Result(new UInt(0), new UInt(0)), PrisonersAndCardsEngine$playOnce$lambda$lambda(this, cage));
  };
  PrisonersAndCardsEngine.prototype.firstCardNumber_0 = function (prisonerNumber) {
    if (this.shouldPrisonersStartWithCardsInTheDrawerOfTheirOwnNumber) {
      return prisonerNumber;
    }
     else {
      return random(new UIntRange_init(new UInt(1), this.numberOfCards), Random.Default);
    }
  };
  function PrisonersAndCardsEngine$Result(winCount, lossCount) {
    this.winCount = winCount;
    this.lossCount = lossCount;
  }
  Object.defineProperty(PrisonersAndCardsEngine$Result.prototype, 'winPercentage', {
    get: function () {
      return uintToDouble(this.winCount.data) / uintToDouble(this.lossCount.data);
    }
  });
  PrisonersAndCardsEngine$Result.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Result',
    interfaces: []
  };
  PrisonersAndCardsEngine$Result.prototype.component1 = function () {
    return this.winCount;
  };
  PrisonersAndCardsEngine$Result.prototype.component2 = function () {
    return this.lossCount;
  };
  PrisonersAndCardsEngine$Result.prototype.copy_oqfnby$ = function (winCount, lossCount) {
    return new PrisonersAndCardsEngine$Result(winCount === void 0 ? this.winCount : winCount, lossCount === void 0 ? this.lossCount : lossCount);
  };
  PrisonersAndCardsEngine$Result.prototype.toString = function () {
    return 'Result(winCount=' + Kotlin.toString(this.winCount) + (', lossCount=' + Kotlin.toString(this.lossCount)) + ')';
  };
  PrisonersAndCardsEngine$Result.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.winCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.lossCount) | 0;
    return result;
  };
  PrisonersAndCardsEngine$Result.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.winCount, other.winCount) && Kotlin.equals(this.lossCount, other.lossCount)))));
  };
  function PrisonersAndCardsEngine$CardCage(orderedCards) {
    this.orderedCards_0 = orderedCards;
  }
  PrisonersAndCardsEngine$CardCage.prototype.pickCard_s87ys9$ = function (drawerNumber) {
    if (uintCompare((new UInt(this.orderedCards_0.size)).data, drawerNumber.data) >= 0) {
      return this.orderedCards_0.get_za3lpa$(drawerNumber.data - 1 | 0);
    }
     else {
      return null;
    }
  };
  PrisonersAndCardsEngine$CardCage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CardCage',
    interfaces: []
  };
  function PrisonersAndCardsEngine$PrisonersAndCardsEngine$CardCage_init(numberOfCards, $this) {
    $this = $this || Object.create(PrisonersAndCardsEngine$CardCage.prototype);
    PrisonersAndCardsEngine$CardCage.call($this, shuffled(toList(new UIntRange_init(new UInt(1), numberOfCards))));
    return $this;
  }
  PrisonersAndCardsEngine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrisonersAndCardsEngine',
    interfaces: []
  };
  function reduceMutating($receiver, result, reducer) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      reducer(result, element);
    }
    return result;
  }
  var through = defineInlineFunction('PrisonersAndCardsProblem.BlueBase.through_ibvkqp$', wrapFunction(function () {
    var UIntRange_init = Kotlin.kotlin.ranges.UIntRange;
    return function ($receiver, other) {
      return new UIntRange_init($receiver, other);
    };
  }));
  var package$jQueryInterface = _.jQueryInterface || (_.jQueryInterface = {});
  package$jQueryInterface.get_parentElement_s15u7w$ = get_parentElement;
  var package$PrisonersAndCardsProblem = _.PrisonersAndCardsProblem || (_.PrisonersAndCardsProblem = {});
  package$PrisonersAndCardsProblem.main = main;
  Object.defineProperty(package$PrisonersAndCardsProblem, 'Setup', {
    get: Setup_getInstance
  });
  $$importsForInline$$.PrisonersAndCardsProblem = _;
  PrisonersAndCardsEngine.Result = PrisonersAndCardsEngine$Result;
  package$PrisonersAndCardsProblem.PrisonersAndCardsEngine = PrisonersAndCardsEngine;
  var package$BlueBase = _.BlueBase || (_.BlueBase = {});
  package$BlueBase.reduceMutating_qpg142$ = reduceMutating;
  package$BlueBase.through_ibvkqp$ = through;
  main();
  Kotlin.defineModule('PrisonersAndCardsProblem', _);
  return _;
}(typeof PrisonersAndCardsProblem === 'undefined' ? {} : PrisonersAndCardsProblem, kotlin);
