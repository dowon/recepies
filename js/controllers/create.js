// THIS SCRIPT MANAGES THE create.html view

var db = firebase.firestore();

function saveRecepie(event){
    event.preventDefault();
    
    var currentRecepie = {};
    Object.assign(currentRecepie, recepie);

    currentRecepie.name = $('#name').val();
    currentRecepie.people = $('#people').val();
    currentRecepie.preparationTime = $('#preparationTime').val();
    currentRecepie.cookingTime = $('#cookingTime').val();
    currentRecepie.difficulty = $('#difficulty').val();
    currentRecepie.cost = $('#cost').val();
    currentRecepie.description = $('#description').val();

    console.log(currentRecepie);

    db.collection('recepies')
    .doc()
    .set(currentRecepie)
    .then(function() {
        console.log("Document successfully written!");
        alert('Yes ;)');
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

//error
    $('input').blur(function(event) {
        event.target.checkValidity();
    }).bind('invalid', function(event) {
        setTimeout(function() { $(event.target).focus();}, 50);
    });

    $(".my-rating-5").starRating({
        starSize: 80,
        strokeWidth: 9,
        strokeColor: 'black',
        initialRating: 2,
        starGradient: {
            start: '#93BFE2',
            end: '#105694'
        }
      });

      $.fn.rate = function(options)
    {
        if (options === undefined || typeof options === 'object')
        {
            return this.each(function(){
                if (!$.data(this, "rate"))
                {
                    $.data(this, "rate", new Rate(this, options));
                }
            });
        }
        else if (typeof options === 'string')
        {
            var args = arguments;
            var returns;
            this.each(function(){
                var instance = $.data(this, "rate");
                if (instance instanceof Rate && typeof instance[options] === 'function')
                {
                    returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
                if (options === 'destroy')
                {
                    // Unbind all events and empty the plugin data from instance
                    $(instance.element).off();
                    $.data(this, 'rate', null);
                }
            });

            return returns !== undefined ? returns : this;
        }
    };

    function Rate(element, options)
    {
        this.element = element;
        this.settings = $.extend({}, $.fn.rate.settings, options);
        this.set_faces = {}; // value, symbol pairs
        this.build();
    }

    Rate.prototype.build = function()
    {
        this.layers = {};
        this.value = 0;
        this.raise_select_layer = false;

        if (this.settings.initial_value)
        {
            this.value = this.settings.initial_value;
        }
        if ($(this.element).attr("data-rate-value"))
        {
            this.value = $(this.element).attr("data-rate-value");
        }

      
    return false;
}
