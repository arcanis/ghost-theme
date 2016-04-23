/*globals jQuery, document */

( function ( $ ) {

    "use strict";

    $( document ).ready( function ( ) {

    	$.datefuzz( 'body' );

    } );

    var tooltip = $( '<img/>' ).css( { position : 'absolute', width : 223, height : 311, background : 'url(http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=0&type=card)' } ).hide( ).appendTo( 'body' );
    var tooltipSelector = 'a[href^="http://gatherer.wizards.com/Pages/Card/Details.aspx?"]';

    $( document ).on( 'mouseenter', tooltipSelector, function ( e ) {

        var match = $( e.currentTarget ).attr( 'href' ).match( /\?(.*)/ );

        if ( ! match )
            return ;

        var locator = match[ 1 ];
        var src = 'http://gatherer.wizards.com/Handlers/Image.ashx?' + locator + '&type=card';

        tooltip.attr( 'src', src ).show( );

    } );

    $( document ).on( 'mousemove', function ( e ) {

        var width = tooltip.width();
        var x = e.pageX + 20;

        if ( e.clientX + 20 + width > document.documentElement.clientWidth )
            x = e.pageX - 20 - width;

        var height = tooltip.height();
        var y = e.pageY - 100;

        if ( e.clientY + 100 + height > document.documentElement.clientHeight )
            y = e.pageY + 100 - height;

        if ( e.clientY + 100 > document.documentElement.clientHeight - 20 )
            y = document.documentElement.scrollHeight - height - 20;

        tooltip.css( { left : x, top : y } );

    } );

    $( document ).on( 'mouseleave', tooltipSelector, function ( ) {

        tooltip.attr( 'src', 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=0&type=card' ).hide( );

    } );

}( jQuery ) );
