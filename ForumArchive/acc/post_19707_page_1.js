[{"Owner":"Dal","Date":"2016-01-07T11:52:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_A sort of philosophical question here..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve been wondering about WebAssembly and how it might impact on us in the Javascript/WebGL world. _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.2ality.com/2015/06/web-assembly.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.2ality.com/2015/06/web-assembly.html_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It seems when it_t_s done_co_ WebAssembly will make it fairly easy to port C++ and other language code to the web._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My question is_dd_ where do we think this will leave those of us who work with TypeScript/JavaScript and WebGL?_lt_/p_gt__lt_p_gt_Will we be able to use this to complement our current technologies_sm_ e.g. by offloading some of the cpu intensive work to an optimised web assembly and better web workers whilst still benefiting from flexible javascript scripting? Or will we struggle to get real benefits from it as we do with asm.js/webworkers at the moment and therefore perhaps be outperformed by c++ ported engines that can be more optimised to use it?_lt_/p_gt__lt_p_gt_I_t_d be interested to here some other people_t_s opinions on that _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-07T12:56:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I did some asm.js tests beside BJS. The gain is real in term of speed within the asm.js process._lt_/p_gt__lt_p_gt_However_co_ AFAIK_co_ the only process that can access the DOM_co_ so the canvas element and the webgl context_co_ remains the main JS thread._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This means we have to pass the data from the main thread to the asm.js thread and get them back once computed. This is not a real problem_co_ we do the same with the webworkers for instance and it works pretty well._lt_/p_gt__lt_p_gt_The problem is more than only ONE heap (buffer / shared memory between the two threads) can be passed. This heap can_t_t have a dynamic size_co_ and this size is generally a power of two and a multiple of 64. This is really low leveled._lt_/p_gt__lt_p_gt_If you need to pass to the fast asm.js thread_co_ say for instance_co_ a dynamic array of positions (vertex coordinates_co_ so float32) and an array of indices (int32) at once to compute an array of normals (float32)_co_ this becomes really painful because you have to store in the same buffer float data_co_ integer data_co_ manage the pointers... and the same for the return._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In other terms_co_ it_t_s really really difficult to some javascript logic to communicate with some asm.js logic._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That_t_s probably why the asm.js projects are coded from top to bottom in C/C++_co_ then transpiled into asm.js _dd_ all the logic in the C/C++ code only._lt_/p_gt__lt_p_gt_The JS thread has then no logic at all_co_ it only gives the access to the WebGL context._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So unless recoding the whole BJS library in C/C++ with a JS API and then transpile it to asm.js_co_ I_t_m afraid it will be difficult to inject a little asm.js here or there to speed it up._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I didn_t_t know about WebAssembly._lt_/p_gt__lt_p_gt_What about their plan about an emerging W3C recommandation what would the guarantee that every browser big editors would get involved into this ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-01-07T15:10:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@jerome From what I_t_ve read_co_ I think WebAssembly already has the support from Google_co_ Microsoft and Mozilla_co_ so it looks likely to be a big player in the coming years._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What I_t_m wondering now_co_ is whether it will make it easier for us to do the kind of stuff you_t_re talking about... or whether it will still be the same problem_co_ and we_t_ll be at a speed disadvantage to c++ engines that are compiled for the web._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2016-01-07T16:46:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_My impression is that WebAssembly is being designed really just to make it easier for binaries from the C++ world to run well on the web._lt_/p_gt__lt_p_gt_It_t_s really too early to tell whether JavaScript could benefit from transpiling to it._lt_/p_gt__lt_p_gt_If WebAssembly includes some features that optimize for functional language features_co_ it may be good for JavaScript._lt_/p_gt__lt_p_gt_But we_t_ll have to wait and see  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-09T21:44:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_they started something in the W3C _lt_a href_eq__qt_https_dd_//www.w3.org/community/webassembly/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.w3.org/community/webassembly/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_detailed easy article _dd_ _lt_a href_eq__qt_https_dd_//auth0.com/blog/2015/10/14/7-things-you-should-know-about-web-assembly/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//auth0.com/blog/2015/10/14/7-things-you-should-know-about-web-assembly/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-10T09:27:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I read much about this yesterday night._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As you may know_co_ the current JS is compiled in the browser to a JS bytecode specifc to the browser JS virtual machine (V8 for chrome_co_ Chakra for Edge_co_ etc)._lt_/p_gt__lt_p_gt_Because of the dynamic typing nature of JS_co_ this compilation is mandatory done Just In Time (JIT)._lt_/p_gt__lt_p_gt_The compiled typed languages like Java_co_ also using the bytecode transformation from the source before behing compiled_co_ can benefit from Ahead Of Time (AOT) compilation._lt_/p_gt__lt_p_gt_Actually_co_ the AOT compilation is not the lone explanation about why the statically compiled programs can run faster than the dynamically typed ones. Indeed_co_ a Java program will run faster even JIT compiled than any dynamically JIT compiled program._lt_/p_gt__lt_p_gt_Why ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You guess it _dd_ because of dynamic typing. _lt_/p_gt__lt_p_gt_The compiler and the VM have many type checks to do at run time_co_ because behind every type used many dynamic memory allocations (and de-allocation) and pointer managements happen under the hood._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_WebAssembly is a project that intends to provide a binary format and a common bytecode to the Web. _lt_/p_gt__lt_p_gt_This will allow to download directly the bytecode from the website_co_ instead of the JS source then to be locally compiled_co_ so less bandwidth_co_ more speed to start to run._lt_/p_gt__lt_p_gt_This will allow also to get close to native speed at execution time. _lt_/p_gt__lt_p_gt_Because this bytecode will use fixed types._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For now you can ever choose a statically typed language or a dynamically typed one_co_ then compile it (JIT for dynamic ones) to a given bytecode if you have the right compiler._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let_t_s get back to Javascript._lt_/p_gt__lt_p_gt_Javascript is dynamically typed. This means that we can_t_t better that what is currently done _dd_ JIT compilation to the dedicated VM bytecode._lt_/p_gt__lt_p_gt_WebAssembly will just be something beside JS._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How developers will emit WebAssembly ? Well_co_ the source languages_co_ for now_co_ are just C/C++ (so statically typed)._lt_/p_gt__lt_p_gt_You code in C/C++_co_ you inject your source into a big chain of complex tools and you get your wasm code that will run in the browser at almost native speed ... once the browser will have the WASM VM._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let_t_s now consider TypeScript._lt_/p_gt__lt_p_gt_For now TypeScript just transpile to JS after have done all type checks. In other words_co_ TypeScript checks types but emit a not-statically typed language_co_ JS_co_ the lone currently able to run in the browser. _lt_/p_gt__lt_p_gt_The source has the static type_co_ the target lost them._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now let_t_s imagine that TypeScript would be more strongly typed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For instance _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var i_dd_ number _eq_ 10_sm_var x_dd_ number _eq_ 2.9864_sm__lt_/pre_gt__lt_p_gt_would become instead_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var i_dd_ int32 _eq_ 10_sm_var x_dd_ float64 _eq_ 2.9864_sm__lt_/pre_gt__lt_p_gt_I personnaly wouldn_t_t mind to code with stonger types once I accepted to use a statically typed language._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This means that with a little TypeScript syntax modification (let_t_s call this version StrongTypeScript) we could afford the possibility to get a source language potentially directly compilable to WebAssembly !_lt_/p_gt__lt_p_gt_And still transpilable to legacy JS !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_StrongTypeScript _eq_ transpile (TS) _eq_&gt_sm_ JS_lt_/p_gt__lt_p_gt_StrongTypeScript _eq_ compile _eq_&gt_sm_ wasm bytecode ... once this compiler will exist_co_ but realisable because of the strong static typing nature of StrongTypeScript_co_ java-like_co_ c-like_co_ etc_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As BJS is coded in TS_co_ this would be only a little fix (just add the missing types to the local temporary variables missing them within some methods) to get the whole framework potentially compilable to the upcoming WebAssembly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ people here working at MS_co_ please contact your colleagues from TypeScript and invite them to add this stronger typing feature to the language  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_thank you_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chg","Date":"2016-01-10T10:31:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think you_t_d have more chance if you argued that additional numeric types would be useful in Typescript even if it doesn_t_t target WebAssembly*... (I_t_ve read their bug tracker for suggestions like outputting JSDoc comments so the output of the transpiler can be put through the Closure Compiler_co_ I get the feeling they won_t_t go for a change that is outside of their vision for the direction of the tooling)_lt_br_gt__lt_br_gt_Javascript already supports more than just _qt_number_qt__co_ today_co_ we have typed arrays which let as explicitly store various sizes of integers and can store single precision floats in addition to doubles. It also looks like Math.fround() will be supported (soon_co_ apparently Unity jumped the gun and are suffering for trying to use it too early) as a hint to the browser that it can do faster single precision maths(eg. Maths.fround(Math.sin(x)) should do do a single precision calculation of the sine of x). Browsers do already make use of hints that an expression will only ever be an integer_co_ with the Chrome devs notably trying to offer explanation of how this works in their browser ( var i_eq_j|0_sm_ //browser_t_s JIT should know that i can only be an int_co_ if it already know j is int the _qt_|0_qt_ should be a noop )_lt_br_gt__lt_br_gt_All this is to say that I feel Typescript would be better with more numeric types even targetting only transpilation to JS_co_ their is already room to support these even only compiling to Javascript I think._lt_br_gt__lt_br_gt_*my hunch is that building a decent TS to bytecode compiler would also be an awful lot of work_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_dd_ It seems to be old and like it hasn_t_t been updated in a while_co_ but what about _lt_a href_eq__qt_https_dd_//mbebenita.github.io/LLJS/_qt_ rel_eq__qt_external nofollow_qt__gt_LLJS_lt_/a_gt_ as a possible way Babylon.js could exploit typing for speed (disclaimer I just happened upon it by chance recently_co_ I have not played with it)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-01-10T20:38:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Interesting stuff... that seems like a natural evolution for typescript to me - and then Babylon could run much faster with minimal changes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I wonder whether we could also benefit from a _qt_hybrid_qt_ though? Do you think it will be possible to rewrite just the performance-hungry bits in c++/webassembly and keep the rest of the engine in javascript?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-10T20:56:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I suppose (couldn_t_t find any detailed specs about this_co_ in particular about the DOM access) that the pipeline between the browser main JS thread and the compiled thread beside (they are always set in different context for safety reasons) will be the same as for the current asm.js model._lt_/p_gt__lt_p_gt_It is to say a shared low level single memory buffer._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This wouldn_t_t be convenient to keep the engine logic in the JS part and to delegate only some computations to the compiled thread._lt_/p_gt__lt_p_gt_I guess the right architecture would rather be _dd__lt_/p_gt__lt_p_gt_- a minimal JS main thread having the access to the DOM_co_ so to the WebGL API_co_ to handle the UI events and the GPU calls_lt_/p_gt__lt_p_gt_- a complete compiled 3D engine (would be nice to be coded in TS) exposing a JS API so the users could code their own game logic in JS and passing the computed orders of rendering to the main thread_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The user logic would then be coded in the main JS thread as currently_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Nothing prevents the downloaded bytecode from being the main thread code (so having the access to the DOM) afaik_co_ so the  compiled full engine could be in the main thred code _co_ but in this case_co_ I can_t_t imagine how/where the framework users would code their logic in javascript._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chg","Date":"2016-01-10T21:28:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Nothing prevents you from sharing the main thread cooperatively_co_ at least with asm.js (probably with WebAssembly too but I haven_t_t checked)._lt_/p_gt__lt_p_gt_\nThe issue with interop is still overhead and hassle from what I_t_ve been able to figure out... how ugly and unmaintainable should one consider making code in the name of a small performance boost. Right now there isn_t_t any tooling on the JS side that let_t_s you work with the typed array views of the buffer _qt_nicely_qt_ (ie. your JS code is all manual computed offsets into the buffer to read or store data in the C/C++ accessible _qt_memory_qt__co_ maybe that LLJS would have addressed this if it wasn_t_t abandoned/is one day resurrected)._lt_/p_gt__lt_p_gt_\nYou can access JS objects in C/C++ now with minimal overhead (I think) but I suspect the more JS objects you work with the less advantage you gain (AOT is still specific to Firefox I believe_co_ and I think only really saves you from the few seconds of warmup as JS code is initially executed by the interpreter_co_ and it_t_s the memory access that makes C++ properties and structs potentially faster)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-11T05:38:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_exactly !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_[EDIT] BTW_co_ this guy made a tool to manage some collections from JS in an asm heap _dd_ _lt_a href_eq__qt_https_dd_//gist.github.com/wellcaffeinated/5399067_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//gist.github.com/wellcaffeinated/5399067_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chg","Date":"2016-01-11T12:36:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_112149_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_19707_qt_ data-ipsquote-username_eq__qt_jerome_qt_ data-cite_eq__qt_jerome_qt_ data-ipsquote-timestamp_eq__qt_1452490686_qt__gt__lt_div_gt__lt_p_gt_exactly !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_[EDIT] BTW_co_ this guy made a tool to manage some collections from JS in an asm heap _dd_ _lt_a href_eq__qt_https_dd_//gist.github.com/wellcaffeinated/5399067_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//gist.github.com/wellcaffeinated/5399067_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_The performance of their _lt_a href_eq__qt_http_dd_//codepen.io/wellcaffeinated/pen/aucEf_qt_ rel_eq__qt_external nofollow_qt__gt_codepen demo_lt_/a_gt_ though_co_ is it just me or does it run terribly?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-11T12:42:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_no_co_ it_t_s quite slow..._lt_/p_gt__lt_p_gt_Well_co_ it_t_s a 2D canvas_co_ but I guess even with it and no asm_co_ we could do far better_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chg","Date":"2016-01-12T00:36:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was too quick to judge the performance of that demo_co_ it is doing way more calculation than I gave it credit for_co_ at 600 objects it_t_s calculating gravitational attraction between something like 359400 pairs of bodies. I_t_d guess inlining may help but yeah I was judging it based upon looks_co_ and looks can be deceiving.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-12T05:35:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tohhh really ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo 360K * 2 iterations ? quite impressive_co_ indeed\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gman","Date":"2016-04-15T09:29:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou_t_ve problaby seen this?_lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.chromestatus.com/feature/5424182347169792_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.chromestatus.com/feature/5424182347169792_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"laliphelet","Date":"2016-12-18T22:31:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHey! I found a nice tutorial on _lt_a href_eq__qt_https_dd_//tutorials.technology/tutorials/11-webassembly-initial-steps-tutorial.html_qt_ rel_eq__qt_external nofollow_qt__gt_how to start with webassembly from scratch here_lt_/a_gt_. The nice thing of this tutorials is that it starts from the beggining and it event teachs you how to install the correct browser. hope it helps\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ivanix","Date":"2017-06-19T22:52:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust an update to this thread.  webassembly is now available on Chrome 57 and Firefox 52!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdge and Safari are supposed to be next.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//hacks.mozilla.org/2017/02/where-is-webassembly-now-and-whats-next/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//hacks.mozilla.org/2017/02/where-is-webassembly-now-and-whats-next/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.chromestatus.com/feature/5453022515691520_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.chromestatus.com/feature/5453022515691520_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//blog.chromium.org/2017/05/goodbye-pnacl-hello-webassembly.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//blog.chromium.org/2017/05/goodbye-pnacl-hello-webassembly.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//hacks.mozilla.org/2017/03/firefox-52-introducing-web-assembly-css-grid-and-the-grid-inspector/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//hacks.mozilla.org/2017/03/firefox-52-introducing-web-assembly-css-grid-and-the-grid-inspector/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]