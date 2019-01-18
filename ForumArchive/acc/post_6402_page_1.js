[{"Owner":"SideraX","Date":"2014-05-13T15:39:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi all _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_At the moment_co_ we have three tools to build and minifying babylon.js _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_ul_gt__lt_li_gt__lt_strong_gt_JSKompactor.exe_lt_/strong_gt_ which if I understand the readme_co_ will use a list of files in the right order generated by BuildOurOwnBabylonJS.bat based on _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Tools/BuildOurOwnBabylonJS/BuildOurOwnBabylonJS/ourOwnBabylonJS.xml_qt_ rel_eq__qt_external nofollow_qt__gt_ourOwnBabylonJS.xml_lt_/a_gt_ and _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Tools/BuildOurOwnBabylonJS/BuildOurOwnBabylonJS/babylonJS.xml_qt_ rel_eq__qt_external nofollow_qt__gt_babylonJS.xml_lt_/a_gt__co_ obviously work only on windows._lt_/li_gt__lt_/ul_gt__lt_p style_eq__qt_margin-left_dd_40px_sm__qt__gt_By the way gwenael_co_ how does this currently work ? I know that you want to use an attribue _qt_dependsOn_qt_ in the xml (you already have the code and the definition in the xsd) but I don_t_t see any in babylonJs.xml ?_lt_/p_gt__lt_ul_gt__lt_li_gt_Not really a tool but we have this wiki page _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/Creating-the-minified-version_qt_ rel_eq__qt_external nofollow_qt__gt_Creating-the-minified-version_lt_/a_gt_ which is maintained by deltakosh_co_ I suppose this list is here for developers who want to run babylon directly in their pages without a minified version._lt_br_gt_ _lt_/li_gt__lt_li_gt_And a _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Tools/Gulp_qt_ rel_eq__qt_external nofollow_qt__gt_gulp_lt_/a_gt_ based process (with the main advantage to be cross-platform_co_ have a fast adoption rate by the js libraries and frontend dev) which I maintain and it require the list of files in the right order too_co_ which is directly in _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Tools/Gulp/gulpfile.js_qt_ rel_eq__qt_external nofollow_qt__gt_gulpfile.js_lt_/a_gt_ (generally I just copy/paste the list of the wiki page)._lt_/li_gt__lt_/ul_gt__lt_p_gt_So we have actually three different file to update every time a new js file is added to the repository _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Tools/BuildOurOwnBabylonJS/BuildOurOwnBabylonJS/babylonJS.xml_qt_ rel_eq__qt_external nofollow_qt__gt_babylonJS.xml_lt_/a_gt__co_ _lt_a href_eq__qt_http_dd_//github.com/BabylonJS/Babylon.js/wiki/Creating-the-minified-version_qt_ rel_eq__qt_external nofollow_qt__gt_the wiki page_lt_/a_gt_ and _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Tools/Gulp/gulpfile.js_qt_ rel_eq__qt_external nofollow_qt__gt_gulpfile.js_lt_/a_gt_. It_t_s a bit inefficient in my opinion ^^ And personally_co_ I miss a lot of update._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_With the 1.12 and typescript_co_ I will update gulp to manage the ts files and this give two different way to do the building process _dd__lt_/p_gt__lt_p_gt_- I can first compile all ts files to their js counterpart and then concat the js files based on our list._lt_/p_gt__lt_p_gt_- I can compile all ts files into one big js file (option --out on typescript compiler) but in this case typescript need a _references.ts files which contains our list in the right order ^^ ( _references.ts is required too in visual studio if you want to use the in-program equivalent of the --out option)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So to make our life simpler_co_ I think we need to either _dd__lt_/p_gt__lt_p_gt_- Have just one tool to build babylon and just one list to maintain._lt_/p_gt__lt_p_gt_- Have typescript to compile one big js file and just maintain _references.ts (drawback _dd_ all js files are completely ignored)._lt_/p_gt__lt_p_gt_- Have the tools use the same list maintened by hand._lt_/p_gt__lt_p_gt_- Have gulp implement something similar to what does BuildOurOwnBabylonJS.bat with _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Tools/BuildOurOwnBabylonJS/BuildOurOwnBabylonJS/babylonJS.xml_qt_ rel_eq__qt_external nofollow_qt__gt_babylonJS.xml_lt_/a_gt_ and the _qt_dependsOn_qt_ attribute._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway an easy_co_ efficient and bugfree building process is really important to make contribution easier  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What do you think ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ps _dd_ please pardon me all grammar error_co_ even if they are hideous ^^_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-13T15:58:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I agree with that _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_- Have just one tool to build babylon and just one list to maintain._lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_- Have the tools use the same list maintened by hand._lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_- Have gulp implement something similar to what does BuildOurOwnBabylonJS.bat with _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Tools/BuildOurOwnBabylonJS/BuildOurOwnBabylonJS/executables/JSKompactor.exe_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_babylonJS.xml_lt_/a_gt_ and the _qt_dependsOn_qt_ attribute._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-05-13T16:07:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_38171_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_6402_qt_ data-ipsquote-username_eq__qt_SideraX_qt_ data-cite_eq__qt_SideraX_qt_ data-ipsquote-timestamp_eq__qt_1399995566_qt__gt__lt_div_gt__lt_div_gt__lt_p style_eq__qt_margin-left_dd_40px_sm__qt__gt_By the way gwenael_co_ how does this currently work ? I know that you want to use an attribue _qt_dependsOn_qt_ in the xml (you already have the code and the definition in the xsd) but I don_t_t see any in babylonJs.xml ?_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m waiting for some deltakosh_t_s time to help me to add all the _qt_dependsOn_qt_ since if one is wrong then the js is not generated. Let_t_s say the tool works like a linker. Now that Typescript is used_co_ it should be easier to add them (automatically?)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-05-13T16:18:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_38171_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_6402_qt_ data-ipsquote-username_eq__qt_SideraX_qt_ data-cite_eq__qt_SideraX_qt_ data-ipsquote-timestamp_eq__qt_1399995566_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_- Have just one tool to build babylon and just one list to maintain._lt_/p_gt__lt_p_gt_- Have typescript to compile one big js file and just maintain _references.ts (drawback _dd_ all js files are completely ignored)._lt_/p_gt__lt_p_gt_- Have the tools use the same list maintened by hand._lt_/p_gt__lt_p_gt_- Have gulp implement something similar to what does BuildOurOwnBabylonJS.bat with _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Tools/BuildOurOwnBabylonJS/BuildOurOwnBabylonJS/executables/JSKompactor.exe_qt_ rel_eq__qt_external nofollow_qt__gt_babylonJS.xml_lt_/a_gt_ and the _qt_dependsOn_qt_ attribute._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For the second one_co_ like you said_co_ it wouldn_t_t include js files whereas deltakosh wanted developpers to still be able to write js files. He will do the port to TS for them but it means they wouldn_t_t be able to test their code in the minified file as long as their code wouldn_t_t have been ported._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Second_co_ third and fourth option may be compiled in one option_dd_ _references.ts is used by a tool to write babylonJS.xml with _qt_dependsOn_qt_ attributes and people add their JS file in ourBabylonJS.xml which includes babylonJS.xml. Thus ourOwnBabylonJS.xml can still be used by BuildOurOwnBabylonJS.bat and something else written for gulp could use it too. Once JS files are ported to TS_co_ people can remove the lines they added to their ourOwnBabylonJS.xml that should never be committed._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SideraX","Date":"2014-05-13T16:29:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So currently how _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_BuildOurOwnBabylonJS.bat know the right order ? babylonJs.xml doesn_t_t seems to have the file sorted by dependency._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_​Unfortunately typescript doesn_t_t have a tool to resolve dependency_co_ It just lauch a error on compile if something is not defined somewhere. _lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span_gt_And _references.ts is just the files with the right order (it look like that _dd_ _lt_/span_gt__lt_a href_eq__qt_https_dd_//github.com/SideraX/sefjs/blob/master/src/_references.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/SideraX/sefjs/blob/master/src/_references.ts_lt_/a_gt_ ) _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt__co_ you can_t_t use it to know which file need which file precisely_co_ you just know that _lt_strong_gt_maybe_lt_/strong_gt_ a file need all the files declared before. _lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_But I can easily parse it_co_ get the path attribute and replace .ts by .js then inject it into gulp.src ^^_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Edit _dd_ typo and link_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-05-13T16:33:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For now_co_ it_t_s (should exactly be) the reverse order of _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/Creating-the-minified-version_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/Creating-the-minified-version_lt_/a_gt_ so yes it has the file sorted by dependency and that_t_s why sometimes I have to modify it to fix the build. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SideraX","Date":"2014-05-13T16:34:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ah reverse order_co_ I missed that ^^_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-13T17:08:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Absolutely. But do not worries too much about dependencies because the way .js files are generated implies that dependencies are most of the times resolved when constructors are called (meaning when all the files are already loaded). So at the end of the day_co_ order does not matter that much_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SideraX","Date":"2014-05-13T17:46:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Most_lt_/span_gt_ of time yes._lt_/p_gt__lt_p_gt_But in some case like prototype inheritance (when you copy the prototype of the parent class) really need it._lt_/p_gt__lt_p_gt_Currently if I use **/*.js (alphabetic order) in gulp instead of the files list_co_ it crash on the first extends._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-13T17:52:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You_t_re right _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]