let calc = {
   numbA: '',
   act: null,
   numbB: '',
}

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

const actions = ['plus', 'minus', 'delen', 'umnozh']

$(document).ready(function () {
   console.log(calc);
   $(".vvd").text(0);

   for (let i = 0; i < numbers.length; i++) {
      const e = numbers[i];

      $('#' + e).click(function () {
         console.log('#' + e);
         if (!calc.act) {
            calc.numbA += e;
            $(".vvd").text(calc.numbA);
         } else {
            calc.numbB += e;
            $(".vvd").text(calc.numbB);
         }
   
         console.log(calc);
      });
   for (let i = 0; i < actions.length; i++) {
         const e = actions[i];

         $('#' + e).click(function () {
            console.log('#' + e);
      
            calc.act = e;
      
            console.log(calc);
         })
      }

   }

   

   $('#rovno').click(function () {
      console.log('#rovno');
      let rovno = null;
      if (calc.act === 'plus') {
         rovno = Number(calc.numbA) + Number(calc.numbB)
      }
      if (calc.act === 'minus') {
         rovno = Number(calc.numbA) - Number(calc.numbB)
      }
      if (calc.act === 'delen') {
         rovno = Number(calc.numbA) / Number(calc.numbB)
      }
      if (calc.act === 'umnozh') {
         rovno = Number(calc.numbA) * Number(calc.numbB)
      }
      $(".vvd").text(rovno);
      calc.numbA = '';
      calc.numbB = '';
      calc.act = null;
   })
});

