[{"Owner":"Deltakosh","Date":"2014-12-13T19:50:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Happy post day_dd_)_lt_/p_gt__lt_p_gt_You_co_ Wingnut_co_ are one of the best member of this community and I really appreciate all the things you are doing for bjs!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-12-15T02:34:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wingnut... your like the first guy I ever met here! And if I remember correctly you told me _qt_I_t_m a terrible coder_qt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sleep.png_qt_ alt_eq__qt_-_-_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sleep@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Your one of the best here man_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-19T04:48:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks josh_co_ but that_t_s not really true.  I just have a great toolbox called babylon.js_co_ which lets me look like a hot coder_co_ even though I suck.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  But YOU are pretty amazing... that_t_s for sure._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well gang_co_ I guess it_t_s time for another weird Wingnut demo_co_ so _lt_strong_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#A4HF3_qt_ rel_eq__qt_external nofollow_qt__gt_here we go_lt_/a_gt__lt_/strong_gt_!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I went looking for a way to translate an object with a setPhysicsState... without using applyImpulse.  I didn_t_t find it_co_ but I found a strange workaround that can be done in an animate function... and I used it in this demo.  Move the mesh_co_ set its physicsState AGAIN_co_ set its physics link to the top of the chain AGAIN_co_ and go._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes_co_ setting a physics state and physics link inside an animation loop... seems strange_co_ but we like strange.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_After that worked_co_ things just got totally out of hand with the experimenting fun._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Fun experimenting lines are..._lt_/p_gt__lt_p_gt_line 48 - set how many links in the chain_lt_/p_gt__lt_p_gt_line 51 - what kind of mesh for each link_lt_/p_gt__lt_p_gt_line 55 - adjust the restitution as high as 20 for large explosions when the chain collides with itself_lt_/p_gt__lt_p_gt_line 55 - change from SphereImposter to BoxImposter or PlaneImposter_lt_/p_gt__lt_p_gt_lines 121 and 126 - speed and sweep of the _t_stead_t__co_ the green box that the chain is trying to remain linked-to_lt_/p_gt__lt_p_gt_  example_dd_  line 121 - stead.position.x +_eq_ Math.cos(alpha)/4_sm_     line 126 - alpha +_eq_ .03_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A person could mess with scene.gravity_co_ too!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Physics linking is TOO MUCH FUN!  Be careful!  Remember to eat and sleep!!!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Party on._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-21T23:42:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi gang!  It_t_s time for Sunday night demos at The Wingnut Chronicles_co_ again.  This time_co_ I am continuing with the physics linking foolery... with _lt_strong_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#K3KZB_qt_ rel_eq__qt_external nofollow_qt__gt_this out-of-control demo_lt_/a_gt__lt_/strong_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now _lt_u_gt_there_lt_/u_gt_ is some terrible coding_co_ Josh.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_   I_t_m SO proud!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Early work is happening on a universal chain-maker function called _lt_em_gt_makechain_lt_/em_gt_ and it has about 500 parameters.  The frame rates aren_t_t TOO bad_co_ but we can tell that Oimo is having to work like hell.  Don_t_t forget that I am a terrible coder_co_ though_co_ and this code could certainly be improved_co_ performance-wise._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The original objective is/was to make a Newton_t_s Cradle. _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//www.shinobicontrols.com/media/335469/newtons_cradle_498x255.jpg_qt_ alt_eq__qt_newtons_cradle_498x255.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We need 6 more chains to accomplish it (the classic versions  have 10 strings)_co_ and I think that Oimo will have a nervous breakdown in the process.  Do we absolutely _lt_u_gt_need_lt_/u_gt_ 10-link chains for the 10 Newton_t_s Cradle strings?  No.  We could use very thin sticks (like chopsticks) instead of strings.  But_co_ in doing that_co_  a person could never get the strings to bend whatsoever.  Then again_co_ Newton_t_s Cradle strings don_t_t bend very much_co_ either._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_One might ask one_t_s self_co_ _qt_Why do the box-chains in the demo... always swing in a +/- Z direction?  Why not +/- X?  hmm._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Oh well_co_ it is a demented mad scientist demo_co_ that much is surely true.  Zip a copy and take it home_co_ and see if you can make your CPU start smoking.  It_t_s all good fun (at least until someone loses an eye).  Kids_co_ don_t_t use this demo as a _qt_how to write good JS_qt_ example_co_ ok?  *nod* _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If anyone wants to _qt_run-with_qt_ this_co_ feel free.  My code is your code_co_ always.  Does anyone want to make a Chain class for us?  Please do (and then share it_co_ thanks).  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Party on!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-12-22T23:08:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ah ah !! Excellent. The way each chain starts is fascinating_co_ can_t_t stop hitting _lt_span style_eq__qt_font-family_dd_arial_co_ helvetica_co_ sans-serif_sm__qt__gt_Run _lt_/span_gt_again and again... _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-26T23:02:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi girls!  I suspect everyone is about sick and tired of Christmas stuff... but..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_...wanna take a sniff at a BJS forum search page that I_t_ve been stealing and hacking?  I knew ya did._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/search/form06/form06.htm_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//urbanproductions.com/wingy/babylon/search/form06/form06.htm_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Work in progress_co_ but... I think it looks pretty nice_co_ thanks to Gryff.  Some local friends are having display problems though.  And my feathering techniques are pretty bad.  I_t_m working on it.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Party on!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-12-26T23:52:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hmmmm_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_for me it looks very messed up... everything is zoomed out. _dd_/_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-27T00:12:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry.  I still have lots of old CSS in there.  My control-mousewheel is acting weird_co_ too. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Did you find the cause of the problem_co_ yet?  C_t_mon!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Do I _lt_u_gt_LOOK_lt_/u_gt_ like a webmaster?  heh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There_t_s a _lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/search/form06/form_files/indexX1.js_qt_ rel_eq__qt_external nofollow_qt__gt_half-meg pile of JS_lt_/a_gt_ that has to ride along with this.  I have no idea what most of it does... i just included it or it wouldn_t_t work.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  I don_t_t doubt that_t_s full of hell. Sigh._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-12-27T10:54:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Replace this in your css wingnut _dd_ (Your background image will be better adapted to all screen sizes)_lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_html{     width_dd_99.9%_sm_    height_dd_100%_sm_    padding_dd_0px_sm_    margin_dd_0px_sm_ }body {    background-image_dd_ url(./form_files/bg01.jpg)_sm_    background-attachment _dd_ fixed_sm_    -o-background-size_dd_ 100% 100%_sm_    -moz-background-size_dd_ 100% 100%_sm_    -webkit-background-size_dd_ 100% 100%_sm_    background-size_dd_ 100% 100%_sm_     width_dd_ 100%_sm_    height_dd_ 100%_sm_ }_lt_/pre_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-27T11:22:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks_co_ Dad72!  Nicely done!  I dropped the sizes in the html style to width_dd_99.0%_sm_ and height_dd_98.0%_sm_   ...which made the scrollbars finally turn-off in my FF.  I hope that didn_t_t mess it up for others_co_ again.  If so_co_ I_t_ll change it back immediately._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for your assistance!  Republished.  All further ideas and assistance... very welcomed and appreciated._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Someday_co_ I would like to have many backgrounds from many people_t_s Babylon scenes (and editors)... so we get a random background each time the page is loaded._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-12-27T11:48:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can also try to remove width_dd_ 99.0% and height_dd_ 98.0%. it may not be necessary.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-28T18:36:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again_co_ gang!_lt_/p_gt__lt_p_gt_   Nothing really exciting happening_co_ but I began researching and experimenting with text printing on dynamicTextures_co_ and learning about CanvasRenderingContext2D (crc2d) objects.  _lt_strong_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#A1CMR_qt_ rel_eq__qt_external nofollow_qt__gt_Take a look_lt_/a_gt__lt_/strong_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_One objective was to begin testing a multi-line drawText function (essentially a drawParagraph() function).  One page that I found during my reasearch... was this_dd_  _lt_a href_eq__qt_http_dd_//delphic.me.uk/webgltext.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//delphic.me.uk/webgltext.html_lt_/a_gt_  (thanks delph!)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ I borrowed some code from there_co_ and built myself a very messy _lt_a href_eq__qt_https_dd_//www.google.com/search?q_eq_CanvasRenderingContext2D&amp_sm_gws_rd_eq_ssl_qt_ rel_eq__qt_external nofollow_qt__gt_crc2d_lt_/a_gt_ mad scientist lab.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Then I tried some retarded things like canvas.translating and trying to use a displacement to make the text extrude a bit.  I also tried animating the wrapU/V_co_ after unclamping its addressmode (huh?). _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_All failed_co_ but that_t_s part of the fun of being a mad scientist_co_ right?  All the debris from those tests_co_ all the alerts_co_ all the brain damage... is still strewn across the ground of this playground.  Big and messy._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Grab a zip or play around with it in the playground_co_ teach me what you learn_co_ show me what you make_co_ and have a ton of fun.  Experiment with the textHeight_co_ maxWidth_co_ and textToWrite on the tobj parameters object... for fun.  Toggle the boolean on that tobj.squareTexture to make things completely mess-up.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  *scratch scratch* _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//www.google.com/search?q_eq_CanvasRenderingContext2D&amp_sm_gws_rd_eq_ssl_qt_ rel_eq__qt_external nofollow_qt__gt_crc2d_lt_/a_gt_ is a BEAST!  Hard to tame!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Learning learning learning.  Party on!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-12-28T22:16:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Nice! Glad to see the power of html5 canvas being used... I think that using canvas as textures is the future._lt_/p_gt__lt_p_gt_Basically anything at all can be drawn into a canvas. &lt_sm_3_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-12-30T22:25:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wingnut I just noticed that this topic is BY FAR the most replied to_co_ not only on the babylon.js forum_co_ but the entire html5gamedevs forum!_lt_/p_gt__lt_p_gt_Holy crap_co_ man!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Congrats _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-12-30T22:55:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wow_co_ impressive !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-30T23:56:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHmm_co_ my continuous begging for attention... seems to be working.  hehe.  There_t_s a really great guy that used to hang around here all the time... Gwenael.  He used to beg me to PLEASE start new threads and stop posting in the same thread over and over... while often changing subjects.  Too funny.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHe just didn_t_t understand that I was building a repository of babbling.  A place where anyone could pull up a chair and a beverage... and start yapping... about anything.  A Babylon microphone.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  It_t_s a place to vent... when you don_t_t want any limelight or spotlight.  A place to reach into one_t_s diaper_co_ grab a hunk of creativity_co_ and _lt_strong_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#SWLWB_qt_ rel_eq__qt_external nofollow_qt__gt_smear it on the wall_lt_/a_gt__lt_/strong_gt_.  Gotta love it.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAltReality recently reminded me of how much I love waves moving through mesh vertex positions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1AVEYO%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1AVEYO#13_lt_/a_gt_  (pretty nice!)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOther geniuses have moved waves through mesh... and I got addicted to playing with them... EVERY TIME.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/7792-bjs-113-new-features-and-demos-lines-and-dragdrop/page-2#entry47341_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/7792-bjs-113-new-features-and-demos-lines-and-dragdrop/page-2#entry47341_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ this _qt_smear on the wall_qt_ is an early attempt to apply waves to a highly-subdivided cap-less cylinder.  Pretty fun.  Using a hijacked CreateCylinder func from the vertexData class (renamed to PlotCylinder) and another CreateCylinder wrapper-func from the Mesh class... I did my best to make a mess experimenting with sin and cosine.  Maybe I_t_ll get it animating someday.  Maybe somebody will do that FOR me.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Maybe mom is going to spank me for smearing that stuff on the wall.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Party on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-02-12T18:17:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi gang!_lt_/p_gt__lt_p_gt_   It_t_s been a while.  I think I_t_m recovered from a recent public spazz-out.  I hope I didn_t_t cause any permanent damage._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Recently_co_ I decided to try to assemble what I will call a GNGT piping line on my Windows 7 crapbox._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_GNGT _eq_ Gitbash-Nodejs-Gulp-Typescript_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Reading_co_ learning_co_ watching videos_co_ I_t_m taken back in time to unix-ville... a place I spent very little time.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But check this out..._lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/misc/gitnode01.jpg_qt_ alt_eq__qt_gitnode01.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ain_t_t that just the coooooolest!?  The _qt_GN_qt_ part of GNGT... is done!  Gitbash and Nodejs.  YAY!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tell ya... the most miserable part... was re-learning how to loosen the perms on a Windows folder (the nodejs folder).  I had to add an _qt_Everyone_qt_ permission object to that folder.  Ownership_co_ run-as-admin_co_ all other methods... refused to let a desktop shortcut to nodejs.exe... have permissions.  Desktop shortcut permed-out_co_ and so was gitbash attempts to accomplish _lt_strong_gt__lt_em_gt_node -v_lt_/em_gt__lt_/strong_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I (admin level user) even _lt_u_gt_owned_lt_/u_gt_ the nodejs folder.  Go fig.  MS Windows_co_ herf_co_ sigh.  Dummy Wingnut_co_ too._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Next step... I_t_m going to make sure I have a recent version of npm_co_ so I can prepare to run (use) the Gulp and Typescript npm modules!  Holy cow!!!  An idiot MIGHT be able to pull this off!  Piping streams might be FUN!  More soon.  Party on!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PS_dd_ Jerome is building the same pipeline_co_ but in a linux environment.  I think he might try to stream from his editor.  I will likely be streaming from a folder... but my Boxer text editor does have quite a _qt_add tools_qt_ area which might easily allow running a batch file. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m watching two of Jerome_t_s threads carefully_co_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/12229-starting-bjs-ts-sublime-text/_qt__gt_this one_lt_/a_gt_ and _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/12460-contribution-validated-working-environments/_qt__gt_this one_lt_/a_gt_.  He_t_s getting some good advice from experienced forum folk._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Update_dd_ installing Gulp and Typescript modules went perfectly.  omg!  Windows Subway System complete!  Look out!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-02-12T20:27:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s been a while Wingnut !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m glad you_t_re ok in the Windows jungle _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-02-23T03:23:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Temechon!  Good to hear from you_co_ as always!  Great work on BabylonDocs!  Thanks for being our documentation hero.  I_t_m still learning to drive it_co_ as you know.  It_t_s pretty sweet!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hey gang_co_ have you seen the new _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/?25_qt_ rel_eq__qt_external nofollow_qt__gt_Volumetric Light Scattering demo at the playground_lt_/a_gt_?  It_t_s BEAUTIFUL!  Wow!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am going to go mad-scientist-crazy on this new BJS feature!  Yum!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Of course I HAD TO modify the default demo with _lt_strong_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#MDOH2_qt_ rel_eq__qt_external nofollow_qt__gt_some tooty frooty colors_lt_/a_gt__lt_/strong_gt_.  Yay!  Fun.  A texture sprays the light beams.  Color-up the texture and you color the light beams.  Easy.  Cool toy!  A little FPS-heavy in full-screen mode_co_ but that_t_s part of the fun. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_u_gt_Nice job_lt_/u_gt_ goes out to the author(s) of our new volumetric light scattering (VLS) system... _lt_u_gt_and_lt_/u_gt_ the excellent first playground demo.  I didn_t_t author any of it.  I just browsed _lt_a href_eq__qt_http_dd_//babylondoc.azurewebsites.net/search.php?q_eq_vls_qt_ rel_eq__qt_external nofollow_qt__gt_the documentation_lt_/a_gt_ and made some easy adjustments._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_VLS rocks!  I_t_m excited!  Party on!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What_t_s that?  You want one more?  Ok_co_ fine_co_ _lt_strong_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#1XOMH0_qt_ rel_eq__qt_external nofollow_qt__gt_here you go_lt_/a_gt__lt_/strong_gt_.  This one is particle-larly interesting.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2015-02-23T03:31:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_WOAHHHHHHHHHHHHHHHH THATS SO COOOOOOLLLLLLLL_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We can make beautiful suns now_co_ with clouds and leaves and stuff scattering the lightttttt YAS!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-23T07:58:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_love this trip _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-02-23T11:09:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Woaw_co_ I suggest your tooty frooty colors demo PG to be added to the tutos on doc.babylonjs.com alongside the official VolumeLightScattering PG_co_ to show possibilities and techniques to achieve._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-02-24T00:27:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi!  Here_t_s a couple more...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tProving that a fire procedural texture... works as a godrays source...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#QKYUV_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#QKYUV_lt_/a_gt_    (keep clicking RUN for different fire colors)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd proving that a video texture... works as a godrays source...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1ELQC1_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1ELQC1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIsn_t_t it great when all of our cool toys... cooperate with each other?  I think so.  Too good!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBoth of these demos are _qt_floor/ground_qt_ versions_co_ where a mesh made with CreateGround was used as the 4th parameter in the godrays constructor.  Sorry for the sloppy code_co_ but there are MANY fun knobs to turn in these demos_co_ and I made a happy mess.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Party on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-02-25T15:08:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat_t_s that you say?  Time for the crème de la crème?  Well_co_ hmm_co_ I suppose.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou knew it had to happen.  Two of my most-recent interests_co_ colliding.  No_co_ I_t_m NOT using sparkly particles as the source of a godrays.  (yay sparticles!)   But that would be interesting_co_ eh?  Use the particle emitter as the mesh for the godrays_co_ and (maybe) then _lt_u_gt_each particle becomes a godrays source_lt_/u_gt_?  Oh my God!  It might not work.  I_t_ll save THAT demented experiment for another day.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNope_co_ this one uses...  well... take a look for yourself...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#HYFQJ_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#HYFQJ_lt_/a_gt_  (click RUN over and over_co_ prepare for drool floods)  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYep_co_ a Spherical Harmonics shape as a godrays source! This uses Jerome_t_s most advanced CreateRibbon function_co_ which is now part of the framework_co_ but I included its full source in the playground... so we could tweak/break things on it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso here... the fantastic fire procedural texture_co_ with its shader _lt_u_gt_included in the playground code_lt_/u_gt_!  More things to bend_co_ spindle_co_ and mutilate!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ of course_co_ all the cool fun and power of our new VLS (Volumetric Light Scattering) system!  Yay!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVLS is a unique feature.  In a way_co_ there are two ways to use it.  (Which is it_co_ Wingy - _qt_a way_qt_ or _qt_two ways_qt_?  Geez_co_ Wingy!)  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tFirst_co_ use VLS as a _qt_radiator_qt_ of volumetric light BEHIND other mesh that occlude/block the god rays.  By default_co_ godrays uses a billboardMode-all plane as the rays radiator.  Easily adjustable.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSecond_co_ you could use VLS to make a mesh BE a godray radiator_co_ like the demo above. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ of course_co_ you could combine the two ideas.  Think about _lt_strong_gt_one_lt_/strong_gt_ SH shape that is radiating godrays_co_ and _lt_strong_gt_another_lt_/strong_gt_ (or many) non-radiating shapes... blocking those godrays (creating godray shadows or godray _qt_light wells_qt_ - rays of black shadow).  coooool!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are SO many fun experiments to be done... that start with THIS demo.  Grab a zip_co_ or just start hacking-away in the playground.  HOURS of entertainment!  (It_t_s kind-of bright_co_ isn_t_t it?  Retina tan!)  Be well_co_ party on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-25T15:26:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wingy_co_ you_t_re an artist _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A 60 fps artist ! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]