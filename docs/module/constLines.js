// Constellation lines.

const constLines = [
	["HIP677","HIP3092"],
	["HIP3092","HIP5447"],
	["HIP9640","HIP5447"],
	["HIP5447","HIP4436"],
	["HIP4436","HIP3881"],
	["HIP51172","HIP48926"],
	["HIP72370","HIP81065"],
	["HIP81065","HIP81852"],
	["HIP98036","HIP97649"],
	["HIP97649","HIP97278"],
	["HIP97649","HIP95501"],
	["HIP95501","HIP97804"],
	["HIP99473","HIP97804"],
	["HIP95501","HIP93747"],
	["HIP93747","HIP93244"],
	["HIP95501","HIP93805"],
	["HIP106278","HIP109074"],
	["HIP109074","HIP110395"],
	["HIP110395","HIP110960"],
	["HIP110960","HIP111497"],
	["HIP111497","HIP112961"],
	["HIP112961","HIP114855"],
	["HIP114855","HIP115438"],
	["HIP109074","HIP110003"],
	["HIP110003","HIP109139"],
	["HIP110003","HIP111123"],
	["HIP111123","HIP112716"],
	["HIP112716","HIP113136"],
	["HIP113136","HIP114341"],
	["HIP102618","HIP106278"],
	["HIP88714","HIP85792"],
	["HIP85792","HIP83081"],
	["HIP83081","HIP82363"],
	["HIP82363","HIP85727"],
	["HIP85727","HIP85267"],
	["HIP85267","HIP85258"],
	["HIP85258","HIP88714"],
	["HIP13209","HIP9884"],
	["HIP9884","HIP8903"],
	["HIP8903","HIP8832"],
	["HIP28380","HIP28360"],
	["HIP28360","HIP24608"],
	["HIP24608","HIP23453"],
	["HIP23453","HIP23015"],
	["HIP25428","HIP23015"],
	["HIP25428","HIP28380"],
	["HIP71795","HIP69673"],
	["HIP69673","HIP72105"],
	["HIP72105","HIP74666"],
	["HIP74666","HIP73555"],
	["HIP73555","HIP71075"],
	["HIP71075","HIP71053"],
	["HIP71053","HIP69673"],
	["HIP69673","HIP67927"],
	["HIP67927","HIP67459"],
	["HIP21060","HIP21770"],
	["HIP21770","HIP21861"],
	["HIP16228","HIP18505"],
	["HIP18505","HIP22783"],
	["HIP16228","HIP17959"],
	["HIP17959","HIP22783"],
	["HIP17959","HIP25110"],
	["HIP100064","HIP100345"],
	["HIP100345","HIP104139"],
	["HIP104139","HIP105515"],
	["HIP105515","HIP106985"],
	["HIP106985","HIP107556"],
	["HIP105515","HIP105881"],
	["HIP105881","HIP104139"],
	["HIP100345","HIP102485"],
	["HIP104139","HIP102978"],
	["HIP45238","HIP50099"],
	["HIP50099","HIP52419"],
	["HIP52419","HIP52468"],
	["HIP52468","HIP54463"],
	["HIP54463","HIP53253"],
	["HIP53253","HIP51232"],
	["HIP51232","HIP50371"],
	["HIP50371","HIP45556"],
	["HIP42568","HIP41037"],
	["HIP41037","HIP30438"],
	["HIP45080","HIP45556"],
	["HIP45080","HIP42568"],
	["HIP30438","HIP31685"],
	["HIP41037","HIP39429"],
	["HIP8886","HIP6686"],
	["HIP6686","HIP4427"],
	["HIP4427","HIP3179"],
	["HIP3179","HIP746"],
	["HIP71683","HIP68702"],
	["HIP68702","HIP66657"],
	["HIP66657","HIP68002"],
	["HIP68002","HIP68282"],
	["HIP68282","HIP67472"],
	["HIP67472","HIP67464"],
	["HIP67464","HIP65936"],
	["HIP65936","HIP65109"],
	["HIP67464","HIP68933"],
	["HIP67472","HIP71352"],
	["HIP71352","HIP73334"],
	["HIP68002","HIP61932"],
	["HIP61932","HIP60823"],
	["HIP60823","HIP59196"],
	["HIP59196","HIP56480"],
	["HIP56480","HIP56561"],
	["HIP109492","HIP112724"],
	["HIP112724","HIP106032"],
	["HIP106032","HIP105199"],
	["HIP105199","HIP109492"],
	["HIP112724","HIP116727"],
	["HIP116727","HIP106032"],
	["HIP10324","HIP11484"],
	["HIP8102","HIP3419"],
	["HIP3419","HIP1562"],
	["HIP3419","HIP5364"],
	["HIP5364","HIP6537"],
	["HIP6537","HIP8645"],
	["HIP8645","HIP11345"],
	["HIP11345","HIP12390"],
	["HIP12390","HIP12770"],
	["HIP12770","HIP11783"],
	["HIP11783","HIP8102"],
	["HIP10826","HIP12390"],
	["HIP10826","HIP12387"],
	["HIP12387","HIP12706"],
	["HIP12706","HIP14135"],
	["HIP14135","HIP13954"],
	["HIP13954","HIP12828"],
	["HIP12828","HIP11484"],
	["HIP11484","HIP12093"],
	["HIP12093","HIP12706"],
	["HIP40702","HIP51839"],
	["HIP51839","HIP60000"],
	["HIP71908","HIP75323"],
	["HIP71908","HIP74824"],
	["HIP33160","HIP34045"],
	["HIP34045","HIP33347"],
	["HIP33347","HIP32349"],
	["HIP32349","HIP33977"],
	["HIP33977","HIP34444"],
	["HIP34444","HIP35037"],
	["HIP35037","HIP35904"],
	["HIP33579","HIP33856"],
	["HIP33856","HIP34444"],
	["HIP33856","HIP33165"],
	["HIP33165","HIP31592"],
	["HIP31592","HIP31416"],
	["HIP31592","HIP30324"],
	["HIP31592","HIP32349"],
	["HIP33579","HIP32759"],
	["HIP30122","HIP33579"],
	["HIP33347","HIP33160"],
	["HIP37279","HIP36188"],
	["HIP43103","HIP42806"],
	["HIP42806","HIP40843"],
	["HIP42806","HIP42911"],
	["HIP42911","HIP40526"],
	["HIP42911","HIP44066"],
	["HIP30277","HIP29807"],
	["HIP29807","HIP28199"],
	["HIP28199","HIP27628"],
	["HIP27628","HIP28328"],
	["HIP27628","HIP26634"],
	["HIP26634","HIP25859"],
	["HIP64241","HIP64394"],
	["HIP64394","HIP60742"],
	["HIP91875","HIP92989"],
	["HIP92989","HIP93174"],
	["HIP93174","HIP93825"],
	["HIP93825","HIP94114"],
	["HIP94114","HIP94160"],
	["HIP94160","HIP94005"],
	["HIP94005","HIP93542"],
	["HIP93542","HIP92953"],
	["HIP91875","HIP90887"],
	["HIP76127","HIP75695"],
	["HIP75695","HIP76267"],
	["HIP76267","HIP76952"],
	["HIP76952","HIP77512"],
	["HIP77512","HIP78159"],
	["HIP78159","HIP78493"],
	["HIP53740","HIP54682"],
	["HIP54682","HIP55705"],
	["HIP55705","HIP55282"],
	["HIP55282","HIP53740"],
	["HIP55282","HIP55687"],
	["HIP55687","HIP56633"],
	["HIP56633","HIP58188"],
	["HIP58188","HIP57283"],
	["HIP57283","HIP55705"],
	["HIP61084","HIP60718"],
	["HIP62434","HIP59747"],
	["HIP61174","HIP60965"],
	["HIP60965","HIP59803"],
	["HIP59803","HIP59316"],
	["HIP59316","HIP59199"],
	["HIP59316","HIP61359"],
	["HIP61359","HIP60965"],
	["HIP61317","HIP63125"],
	["HIP94779","HIP95853"],
	["HIP95853","HIP97165"],
	["HIP97165","HIP100453"],
	["HIP100453","HIP102098"],
	["HIP100453","HIP102488"],
	["HIP102488","HIP104732"],
	["HIP104732","HIP107310"],
	["HIP100453","HIP98110"],
	["HIP98110","HIP95947"],
	["HIP101421","HIP101769"],
	["HIP101769","HIP101958"],
	["HIP101958","HIP102532"],
	["HIP102532","HIP102281"],
	["HIP102281","HIP101769"],
	["HIP27100","HIP27890"],
	["HIP27890","HIP26069"],
	["HIP26069","HIP27100"],
	["HIP26069","HIP21281"],
	["HIP21281","HIP19893"],
	["HIP87585","HIP87833"],
	["HIP87833","HIP85670"],
	["HIP85670","HIP85829"],
	["HIP85829","HIP87585"],
	["HIP87585","HIP94376"],
	["HIP94376","HIP97433"],
	["HIP97433","HIP89937"],
	["HIP89937","HIP83895"],
	["HIP83895","HIP80331"],
	["HIP80331","HIP78527"],
	["HIP78527","HIP75458"],
	["HIP75458","HIP68756"],
	["HIP68756","HIP61281"],
	["HIP61281","HIP56211"],
	["HIP104521","HIP104858"],
	["HIP104858","HIP105570"],
	["HIP105570","HIP104987"],
	["HIP104987","HIP104521"],
	["HIP7588","HIP9007"],
	["HIP9007","HIP10602"],
	["HIP10602","HIP11407"],
	["HIP11407","HIP12413"],
	["HIP12413","HIP12486"],
	["HIP12486","HIP13847"],
	["HIP13847","HIP15510"],
	["HIP15510","HIP17797"],
	["HIP17797","HIP17874"],
	["HIP17874","HIP20042"],
	["HIP20042","HIP20535"],
	["HIP20535","HIP21393"],
	["HIP21393","HIP17651"],
	["HIP17651","HIP16611"],
	["HIP16611","HIP15474"],
	["HIP15474","HIP14146"],
	["HIP14146","HIP12843"],
	["HIP12843","HIP13701"],
	["HIP13701","HIP15197"],
	["HIP15197","HIP16537"],
	["HIP16537","HIP17378"],
	["HIP17378","HIP21444"],
	["HIP21444","HIP22109"],
	["HIP22109","HIP22701"],
	["HIP22701","HIP23875"],
	["HIP23875","HIP23972"],
	["HIP23972","HIP21594"],
	["HIP13147","HIP14879"],
	["HIP31681","HIP34088"],
	["HIP34088","HIP35550"],
	["HIP35550","HIP35350"],
	["HIP35350","HIP32362"],
	["HIP35550","HIP36962"],
	["HIP36962","HIP37740"],
	["HIP36962","HIP37826"],
	["HIP36962","HIP36046"],
	["HIP36046","HIP34693"],
	["HIP34693","HIP36850"],
	["HIP34693","HIP33018"],
	["HIP34693","HIP32246"],
	["HIP32246","HIP30883"],
	["HIP32246","HIP30343"],
	["HIP30343","HIP29655"],
	["HIP29655","HIP28734"],
	["HIP114131","HIP110997"],
	["HIP110997","HIP109268"],
	["HIP109268","HIP112122"],
	["HIP112122","HIP114421"],
	["HIP114421","HIP114131"],
	["HIP112122","HIP113638"],
	["HIP112122","HIP112623"],
	["HIP109268","HIP109111"],
	["HIP109111","HIP108085"],
	["HIP86414","HIP87808"],
	["HIP87808","HIP85112"],
	["HIP85112","HIP84606"],
	["HIP84606","HIP84380"],
	["HIP84380","HIP81833"],
	["HIP81833","HIP81126"],
	["HIP81126","HIP79992"],
	["HIP79992","HIP77760"],
	["HIP81833","HIP81693"],
	["HIP81693","HIP80816"],
	["HIP80816","HIP80170"],
	["HIP81693","HIP83207"],
	["HIP83207","HIP85693"],
	["HIP85693","HIP84379"],
	["HIP86974","HIP87933"],
	["HIP87933","HIP88794"],
	["HIP87933","HIP86974"],
	["HIP83207","HIP84380"],
	["HIP19747","HIP12484"],
	["HIP12484","HIP14240"],
	["HIP42799","HIP42402"],
	["HIP42402","HIP42313"],
	["HIP42313","HIP43109"],
	["HIP43109","HIP43234"],
	["HIP43234","HIP42799"],
	["HIP43234","HIP43813"],
	["HIP43813","HIP45336"],
	["HIP45336","HIP46776"],
	["HIP46776","HIP46509"],
	["HIP46509","HIP46390"],
	["HIP46390","HIP48356"],
	["HIP48356","HIP49841"],
	["HIP49841","HIP51069"],
	["HIP51069","HIP52943"],
	["HIP52943","HIP56343"],
	["HIP56343","HIP57936"],
	["HIP57936","HIP64166"],
	["HIP64166","HIP64962"],
	["HIP2021","HIP17678"],
	["HIP17678","HIP12394"],
	["HIP12394","HIP11001"],
	["HIP11001","HIP9236"],
	["HIP105319","HIP101772"],
	["HIP101772","HIP103227"],
	["HIP103227","HIP105319"],
	["HIP109937","HIP111104"],
	["HIP111104","HIP111022"],
	["HIP111022","HIP110609"],
	["HIP110609","HIP110538"],
	["HIP110538","HIP111169"],
	["HIP111169","HIP111022"],
	["HIP57632","HIP54879"],
	["HIP54879","HIP49669"],
	["HIP49669","HIP49583"],
	["HIP49583","HIP50583"],
	["HIP50583","HIP54872"],
	["HIP54872","HIP57632"],
	["HIP50583","HIP50335"],
	["HIP50335","HIP48455"],
	["HIP48455","HIP47908"],
	["HIP54872","HIP54879"],
	["HIP28910","HIP28103"],
	["HIP28103","HIP27288"],
	["HIP27288","HIP25985"],
	["HIP25985","HIP24305"],
	["HIP25985","HIP27654"],
	["HIP27654","HIP27072"],
	["HIP27072","HIP25606"],
	["HIP25606","HIP23685"],
	["HIP25985","HIP25606"],
	["HIP24305","HIP24845"],
	["HIP24305","HIP24327"],
	["HIP23685","HIP24305"],
	["HIP24327","HIP24244"],
	["HIP24845","HIP24873"],
	["HIP77853","HIP76333"],
	["HIP76333","HIP74785"],
	["HIP74785","HIP72622"],
	["HIP72622","HIP73714"],
	["HIP73714","HIP76333"],
	["HIP53229","HIP51233"],
	["HIP51233","HIP49593"],
	["HIP49593","HIP46952"],
	["HIP49593","HIP53229"],
	["HIP77634","HIP78970"],
	["HIP78970","HIP78384"],
	["HIP78384","HIP77634"],
	["HIP78384","HIP76297"],
	["HIP76297","HIP75141"],
	["HIP75141","HIP75177"],
	["HIP75141","HIP73273"],
	["HIP76297","HIP76552"],
	["HIP76552","HIP74395"],
	["HIP74395","HIP71860"],
	["HIP74395","HIP71536"],
	["HIP71860","HIP70576"],
	["HIP71860","HIP73273"],
	["HIP45860","HIP45688"],
	["HIP45688","HIP44700"],
	["HIP44700","HIP44248"],
	["HIP44248","HIP41075"],
	["HIP41075","HIP36145"],
	["HIP36145","HIP33449"],
	["HIP33449","HIP30060"],
	["HIP91262","HIP91971"],
	["HIP91971","HIP92420"],
	["HIP92420","HIP93194"],
	["HIP93194","HIP92791"],
	["HIP92791","HIP91971"],
	["HIP25918","HIP21949"],
	["HIP105140","HIP103738"],
	["HIP103738","HIP102831"],
	["HIP29651","HIP30867"],
	["HIP30867","HIP34769"],
	["HIP34769","HIP30419"],
	["HIP30419","HIP29151"],
	["HIP34769","HIP39863"],
	["HIP39863","HIP37447"],
	["HIP62322","HIP57363"],
	["HIP57363","HIP61199"],
	["HIP61199","HIP61585"],
	["HIP61585","HIP62322"],
	["HIP79509","HIP80000"],
	["HIP80000","HIP80582"],
	["HIP80582","HIP78639"],
	["HIP78639","HIP80000"],
	["HIP78639","HIP79509"],
	["HIP107089","HIP112405"],
	["HIP112405","HIP70638"],
	["HIP70638","HIP107089"],
	["HIP86032","HIP86742"],
	["HIP84012","HIP86742"],
	["HIP86032","HIP83000"],
	["HIP83000","HIP79882"],
	["HIP79882","HIP81377"],
	["HIP81377","HIP84012"],
	["HIP84012","HIP85755"],
	["HIP26727","HIP26311"],
	["HIP26311","HIP25930"],
	["HIP28691","HIP29426"],
	["HIP29426","HIP29038"],
	["HIP29038","HIP27913"],
	["HIP29426","HIP28614"],
	["HIP28614","HIP27989"],
	["HIP27989","HIP26727"],
	["HIP26727","HIP27366"],
	["HIP27366","HIP24436"],
	["HIP24436","HIP25930"],
	["HIP25930","HIP25336"],
	["HIP25336","HIP26207"],
	["HIP26207","HIP27989"],
	["HIP25336","HIP22449"],
	["HIP22449","HIP22549"],
	["HIP22549","HIP22730"],
	["HIP22730","HIP23123"],
	["HIP22449","HIP22509"],
	["HIP22509","HIP22845"],
	["HIP29038","HIP28614"],
	["HIP100751","HIP105858"],
	["HIP105858","HIP102395"],
	["HIP102395","HIP99240"],
	["HIP99240","HIP100751"],
	["HIP99240","HIP98495"],
	["HIP98495","HIP91792"],
	["HIP91792","HIP93015"],
	["HIP93015","HIP99240"],
	["HIP93015","HIP92609"],
	["HIP92609","HIP90098"],
	["HIP90098","HIP88866"],
	["HIP88866","HIP92609"],
	["HIP88866","HIP86929"],
	["HIP1067","HIP113963"],
	["HIP113881","HIP112158"],
	["HIP112158","HIP109352"],
	["HIP113881","HIP112748"],
	["HIP112748","HIP112440"],
	["HIP112440","HIP109176"],
	["HIP109176","HIP107354"],
	["HIP113963","HIP112447"],
	["HIP112447","HIP112029"],
	["HIP112029","HIP109427"],
	["HIP109427","HIP107315"],
	["HIP677","HIP113881"],
	["HIP677","HIP1067"],
	["HIP113881","HIP113963"],
	["HIP17448","HIP18246"],
	["HIP18246","HIP18614"],
	["HIP18614","HIP18532"],
	["HIP18532","HIP17358"],
	["HIP17358","HIP15863"],
	["HIP15863","HIP14328"],
	["HIP14328","HIP13268"],
	["HIP15863","HIP14576"],
	["HIP14576","HIP14354"],
	["HIP14354","HIP13254"],
	["HIP5348","HIP5165"],
	["HIP5165","HIP2072"],
	["HIP2072","HIP5348"],
	["HIP5165","HIP7083"],
	["HIP7083","HIP8837"],
	["HIP8837","HIP5165"],
	["HIP5165","HIP6867"],
	["HIP6867","HIP2072"],
	["HIP2072","HIP2081"],
	["HIP2081","HIP765"],
	["HIP765","HIP2072"],
	["HIP32607","HIP27530"],
	["HIP27530","HIP27321"],
	["HIP113368","HIP111954"],
	["HIP111954","HIP108661"],
	["HIP108661","HIP107608"],
	["HIP107608","HIP109422"],
	["HIP109422","HIP111188"],
	["HIP111188","HIP113246"],
	["HIP4889","HIP5742"],
	["HIP4889","HIP6193"],
	["HIP6193","HIP5742"],
	["HIP5742","HIP7097"],
	["HIP7097","HIP8198"],
	["HIP8198","HIP9487"],
	["HIP9487","HIP8833"],
	["HIP8833","HIP7884"],
	["HIP7884","HIP7007"],
	["HIP7007","HIP4906"],
	["HIP4906","HIP3760"],
	["HIP3760","HIP1645"],
	["HIP1645","HIP118268"],
	["HIP118268","HIP116771"],
	["HIP116771","HIP116928"],
	["HIP116928","HIP115738"],
	["HIP115738","HIP114971"],
	["HIP114971","HIP115830"],
	["HIP115830","HIP116771"],
	["HIP39757","HIP38146"],
	["HIP38146","HIP35264"],
	["HIP35264","HIP31685"],
	["HIP31685","HIP32768"],
	["HIP32768","HIP36377"],
	["HIP36377","HIP39429"],
	["HIP39429","HIP39757"],
	["HIP42515","HIP42828"],
	["HIP42828","HIP43409"],
	["HIP19780","HIP19921"],
	["HIP19921","HIP18597"],
	["HIP18597","HIP17440"],
	["HIP17440","HIP19780"],
	["HIP116231","HIP4577"],
	["HIP4577","HIP115102"],
	["HIP115102","HIP116231"],
	["HIP85927","HIP86670"],
	["HIP86670","HIP87073"],
	["HIP87073","HIP86228"],
	["HIP86228","HIP84143"],
	["HIP84143","HIP82671"],
	["HIP82671","HIP82514"],
	["HIP82514","HIP82396"],
	["HIP82396","HIP81266"],
	["HIP81266","HIP80763"],
	["HIP80763","HIP78401"],
	["HIP80763","HIP78265"],
	["HIP80763","HIP78820"],
	["HIP92175","HIP92202"],
	["HIP92202","HIP92814"],
	["HIP92814","HIP90595"],
	["HIP90595","HIP91117"],
	["HIP91117","HIP92175"],
	["HIP77516","HIP77622"],
	["HIP77622","HIP77070"],
	["HIP77070","HIP76276"],
	["HIP76276","HIP77233"],
	["HIP77233","HIP78072"],
	["HIP78072","HIP77450"],
	["HIP77450","HIP77233"],
	["HIP92946","HIP89962"],
	["HIP89962","HIP86565"],
	["HIP86565","HIP86263"],
	["HIP86263","HIP84880"],
	["HIP51437","HIP49641"],
	["HIP96837","HIP97365"],
	["HIP97365","HIP96757"],
	["HIP97365","HIP98337"],
	["HIP98337","HIP98920"],
	["HIP89931","HIP90496"],
	["HIP89642","HIP90185"],
	["HIP90185","HIP88635"],
	["HIP88635","HIP87072"],
	["HIP88635","HIP89931"],
	["HIP89931","HIP90185"],
	["HIP90185","HIP93506"],
	["HIP93506","HIP92041"],
	["HIP92041","HIP89931"],
	["HIP92041","HIP90496"],
	["HIP90496","HIP89341"],
	["HIP93506","HIP93864"],
	["HIP93864","HIP92855"],
	["HIP92855","HIP92041"],
	["HIP92855","HIP93085"],
	["HIP93085","HIP93683"],
	["HIP93683","HIP94820"],
	["HIP94820","HIP95168"],
	["HIP93864","HIP96406"],
	["HIP96406","HIP98688"],
	["HIP98688","HIP98412"],
	["HIP98412","HIP98032"],
	["HIP98032","HIP95347"],
	["HIP98032","HIP95294"],
	["HIP25428","HIP21881"],
	["HIP21881","HIP20889"],
	["HIP21421","HIP26451"],
	["HIP20205","HIP20455"],
	["HIP20205","HIP18724"],
	["HIP18724","HIP15900"],
	["HIP21421","HIP20889"],
	["HIP21421","HIP20894"],
	["HIP20894","HIP20205"],
	["HIP20889","HIP20648"],
	["HIP20648","HIP20455"],
	["HIP20455","HIP17847"],
	["HIP90568","HIP90422"],
	["HIP82273","HIP74946"],
	["HIP74946","HIP77952"],
	["HIP77952","HIP82273"],
	["HIP10559","HIP10064"],
	["HIP10064","HIP8796"],
	["HIP8796","HIP10559"],
	["HIP110130","HIP114996"],
	["HIP114996","HIP1599"],
	["HIP114996","HIP2484"],
	["HIP67301","HIP65378"],
	["HIP65378","HIP62956"],
	["HIP62956","HIP59774"],
	["HIP59774","HIP54061"],
	["HIP54061","HIP53910"],
	["HIP53910","HIP58001"],
	["HIP58001","HIP59774"],
	["HIP58001","HIP57399"],
	["HIP57399","HIP54539"],
	["HIP54539","HIP50372"],
	["HIP54539","HIP50801"],
	["HIP53910","HIP48402"],
	["HIP48402","HIP46853"],
	["HIP46853","HIP44471"],
	["HIP46853","HIP44127"],
	["HIP48402","HIP48319"],
	["HIP48319","HIP41704"],
	["HIP41704","HIP46733"],
	["HIP46733","HIP54061"],
	["HIP11767","HIP85822"],
	["HIP85822","HIP82080"],
	["HIP82080","HIP77055"],
	["HIP77055","HIP79822"],
	["HIP79822","HIP75097"],
	["HIP75097","HIP72607"],
	["HIP72607","HIP77055"],
	["HIP39953","HIP42536"],
	["HIP42536","HIP42913"],
	["HIP42913","HIP45941"],
	["HIP45941","HIP48774"],
	["HIP48774","HIP52727"],
	["HIP52727","HIP51986"],
	["HIP51986","HIP50191"],
	["HIP50191","HIP46651"],
	["HIP46651","HIP44816"],
	["HIP44816","HIP39953"],
	["HIP57380","HIP60030"],
	["HIP60030","HIP61941"],
	["HIP61941","HIP65474"],
	["HIP65474","HIP69427"],
	["HIP69427","HIP69701"],
	["HIP69701","HIP71957"],
	["HIP65474","HIP66249"],
	["HIP66249","HIP68520"],
	["HIP68520","HIP72220"],
	["HIP66249","HIP63090"],
	["HIP63090","HIP63608"],
	["HIP63090","HIP61941"],
	["HIP37504","HIP34481"],
	["HIP34481","HIP39794"],
	["HIP39794","HIP37504"],
	["HIP39794","HIP35228"],
	["HIP39794","HIP41312"],
	["HIP41312","HIP44382"],
	["HIP44382","HIP39794"],
	["HIP95771","HIP98543"]
]

