import React from 'react';
import MarketingCampaigns from './MarketingCampaigns';

require('./App.css');

export default class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.data = [
	      //{line_id: 111, apendix_id: 222, campaigns: [{campaign_id: 333, campaign_name: 444}, {campaign_id: 555, campaign_name: 666}]},
	      //{line_id: 111, apendix_id: 222, campaigns: [{campaign_id: 333, campaign_name: 444}, {campaign_id: 555, campaign_name: 666}]},

	      
			{"line_id":500531073,"apendix_id":573667519,"name":"Ozu","budget":591723,"daily_budget":63510,"performance":"0.053","start_date":"20150425","end_date":"20150720","campaigns":1,
			"campaign_row": [
			{"campaign_id":85479047,"campaign_name":"Mary Scott","daily_budget_row":2845,"perc_budget":"47.28574","clicks":149,"performance_row":"0.973","impressions":5166,"start_date_row":"20150529"},
			{"campaign_id":964385415,"campaign_name":"Beverly Jacobs","daily_budget_row":2949,"perc_budget":"87.01878","clicks":71,"performance_row":"0.181","impressions":8753,"start_date_row":"20160616"},
			{"campaign_id":41793462,"campaign_name":"Samuel Alexander","daily_budget_row":3330,"perc_budget":"68.92649","clicks":439,"performance_row":"0.399","impressions":3973,"start_date_row":"20151227"},
			{"campaign_id":954886933,"campaign_name":"Phyllis Medina","daily_budget_row":3786,"perc_budget":"80.06903","clicks":452,"performance_row":"0.667","impressions":12840,"start_date_row":"20151030"}
			]},
			


			{line_id: 111, apendix_id: 222, name: "Medtronic Minneapolis Desktop paid", budget: 5558659, daily_budget: 18961, performance: 0.094076, start_date: 20160425, end_date: 20160524, campaigns: 3,
			campaign_row: [
			{campaign_id: 1467081040, campaign_name: "Vicki Neill OPEN_PA_N_N_N", daily_budget_row: 2221, perc_budget: 25.7937147654, clicks: 87, performance_row: 0.022, impressions: 4650, start_date_row: 20151008},
			{campaign_id: 1202773777, campaign_name: "Vicki Neill OPEN", daily_budget_row: 1516, perc_budget: 35.7937147654, clicks: 0, performance_row: 0.086, impressions: 1967, start_date_row: 20151028},
			{campaign_id: 3033410711, campaign_name: "Vicki Neill OPEN_PA_357_N", daily_budget_row: 747, perc_budget: 19.65201561, clicks: 22, performance_row: 0.065, impressions: 841, start_date_row: 20151018},
			{campaign_id: 4657809998, campaign_name: "Vicki Neill - Tier 1", daily_budget_row: 1721, perc_budget: 22.22489, clicks: 0, performance_row: 0, impressions: 129, start_date_row: 20151012}
			]},	



      /*{line_id: 111, apendix_id: 222, name: "Medtronic Minneapolis Desktop paid", budget: 5558659, daily_budget: 18961, performance: 0.094076, start_date: 20160425, end_date: 20160524, campaigns: 3,

      campaign_row: [
      {campaign_id: 1467081040, campaign_name: "Vicki Neill OPEN_PA_N_N_N", daily_budget_row: 2221, perc_budget: 25.7937147654, clicks: 87, performance_row: 0.022, impressions: 4650, start_date_row: 20151008},
      {campaign_id: 1202773777, campaign_name: "Vicki Neill OPEN", daily_budget_row: 1516, perc_budget: 35.7937147654, clicks: 0, performance_row: 0.086, impressions: 1967, start_date_row: 20151028},
      {campaign_id: 3033410711, campaign_name: "Vicki Neill OPEN_PA_357_N", daily_budget_row: 747, perc_budget: 19.65201561, clicks: 22, performance_row: 0.065, impressions: 841, start_date_row: 20151018},
      {campaign_id: 4657809998, campaign_name: "Vicki Neill - Tier 1", daily_budget_row: 1721, perc_budget: 22.22489, clicks: 0, performance_row: 0, impressions: 129, start_date_row: 20151012}
      ]},
      */









		{"line_id":178432170,"apendix_id":538743659,"name":"Brainverse","budget":796969,"daily_budget":82113,"performance":"0.86","start_date":"20150715","end_date":"20151003","campaigns":10,
		"campaign_row": [
		{"campaign_id":329779741,"campaign_name":"Jonathan Garrett","daily_budget_row":3346,"perc_budget":"5.86003","clicks":178,"performance_row":"0.775","impressions":11885,"start_date_row":"20150610"},
		{"campaign_id":810440572,"campaign_name":"Jessica Sanders","daily_budget_row":2289,"perc_budget":"32.23258","clicks":97,"performance_row":"0.265","impressions":1759,"start_date_row":"20150624"},
		{"campaign_id":54290935,"campaign_name":"Melissa Griffin","daily_budget_row":3695,"perc_budget":"10.7028","clicks":250,"performance_row":"0.061","impressions":2841,"start_date_row":"20151103"},
		{"campaign_id":94067530,"campaign_name":"Ruby Mitchell","daily_budget_row":2986,"perc_budget":"86.88413","clicks":341,"performance_row":"0.267","impressions":7175,"start_date_row":"20160603"},
		{"campaign_id":850011622,"campaign_name":"Jessica Meyer","daily_budget_row":3815,"perc_budget":"21.22025","clicks":349,"performance_row":"0.319","impressions":6376,"start_date_row":"20150708"},
		{"campaign_id":445907101,"campaign_name":"Patrick Garrett","daily_budget_row":3642,"perc_budget":"90.28302","clicks":10,"performance_row":"0.588","impressions":4431,"start_date_row":"20151218"},
		{"campaign_id":270166363,"campaign_name":"Betty Howell","daily_budget_row":1449,"perc_budget":"94.41201","clicks":14,"performance_row":"0.259","impressions":8090,"start_date_row":"20151014"},
		{"campaign_id":477461709,"campaign_name":"Lori Reyes","daily_budget_row":1268,"perc_budget":"76.30643","clicks":295,"performance_row":"0.158","impressions":6747,"start_date_row":"20151031"},
		{"campaign_id":420672160,"campaign_name":"Marie Meyer","daily_budget_row":1393,"perc_budget":"73.02035","clicks":124,"performance_row":"0.721","impressions":3314,"start_date_row":"20160409"},
		{"campaign_id":454502397,"campaign_name":"Betty Gomez","daily_budget_row":3267,"perc_budget":"4.92745","clicks":403,"performance_row":"0.268","impressions":8376,"start_date_row":"20160405"}
		]},

		{"line_id":238704290,"apendix_id":101127739,"name":"Abatz","budget":445844,"daily_budget":3509,"performance":"0.232","start_date":"20151005","end_date":"20160228","campaigns":16,
		"campaign_row": [
		{"campaign_id":756511042,"campaign_name":"Carolyn Gardner","daily_budget_row":1124,"perc_budget":"51.96194","clicks":449,"performance_row":"0.53","impressions":9727,"start_date_row":"20150622"},
		{"campaign_id":166341398,"campaign_name":"Bobby Williamson","daily_budget_row":3979,"perc_budget":"60.41567","clicks":101,"performance_row":"0.468","impressions":10644,"start_date_row":"20151018"},
		{"campaign_id":494064544,"campaign_name":"Karen Taylor","daily_budget_row":3741,"perc_budget":"42.61943","clicks":452,"performance_row":"0.568","impressions":11045,"start_date_row":"20150924"},
		{"campaign_id":247421157,"campaign_name":"Roy Perez","daily_budget_row":3709,"perc_budget":"93.57721","clicks":358,"performance_row":"0.674","impressions":3941,"start_date_row":"20150610"}
		]},

		{"line_id":519504288,"apendix_id":973213451,"name":"Kwideo","budget":286799,"daily_budget":48296,"performance":"0.733","start_date":"20160119","end_date":"20160806","campaigns":7,
		"campaign_row": [
		{"campaign_id":95278581,"campaign_name":"Jesse Welch","daily_budget_row":1813,"perc_budget":"70.0402","clicks":486,"performance_row":"0.227","impressions":2236,"start_date_row":"20151104"},
		{"campaign_id":74862873,"campaign_name":"Andrew West","daily_budget_row":1724,"perc_budget":"10.68174","clicks":198,"performance_row":"0.971","impressions":10753,"start_date_row":"20150904"},
		{"campaign_id":998798741,"campaign_name":"Ryan Harrison","daily_budget_row":3502,"perc_budget":"45.63122","clicks":256,"performance_row":"0.77","impressions":11374,"start_date_row":"20151201"},
		{"campaign_id":104312403,"campaign_name":"Tammy Wagner","daily_budget_row":1923,"perc_budget":"47.79333","clicks":243,"performance_row":"0.293","impressions":9415,"start_date_row":"20160705"}
		]},

		{"line_id":570077860,"apendix_id":614112266,"name":"Eazzy","budget":596012,"daily_budget":61047,"performance":"0.289","start_date":"20150407","end_date":"20160821","campaigns":11,
		"campaign_row": [
		{"campaign_id":589352264,"campaign_name":"Rachel Spencer","daily_budget_row":2973,"perc_budget":"97.0493","clicks":333,"performance_row":"0.004","impressions":11956,"start_date_row":"20151122"},
		{"campaign_id":18428042,"campaign_name":"Julia Bell","daily_budget_row":1376,"perc_budget":"13.88151","clicks":360,"performance_row":"0.469","impressions":3035,"start_date_row":"20160106"},
		{"campaign_id":393095354,"campaign_name":"Alan Black","daily_budget_row":1553,"perc_budget":"1.59869","clicks":299,"performance_row":"0.009","impressions":9894,"start_date_row":"20160630"},
		{"campaign_id":696531272,"campaign_name":"Anne Parker","daily_budget_row":3763,"perc_budget":"92.50514","clicks":186,"performance_row":"0.355","impressions":8424,"start_date_row":"20150719"}
		]},

		{"line_id":481356274,"apendix_id":313242065,"name":"DabZ","budget":215752,"daily_budget":55391,"performance":"0.642","start_date":"20160128","end_date":"20160620","campaigns":10,
		"campaign_row": [
		{"campaign_id":144934490,"campaign_name":"Norma Jenkins","daily_budget_row":3939,"perc_budget":"77.57271","clicks":339,"performance_row":"0.314","impressions":697,"start_date_row":"20160121"},
		{"campaign_id":681634648,"campaign_name":"Melissa Reed","daily_budget_row":2208,"perc_budget":"31.76622","clicks":308,"performance_row":"0.558","impressions":5815,"start_date_row":"20160629"},
		{"campaign_id":788466651,"campaign_name":"Jack Peterson","daily_budget_row":1497,"perc_budget":"32.67906","clicks":144,"performance_row":"0.262","impressions":4231,"start_date_row":"20150730"},
		{"campaign_id":126797308,"campaign_name":"Alice Fowler","daily_budget_row":2454,"perc_budget":"55.64125","clicks":254,"performance_row":"0.639","impressions":8970,"start_date_row":"20150909"}
		]},

		{"line_id":400506442,"apendix_id":320513770,"name":"Layo","budget":962236,"daily_budget":80844,"performance":"0.88","start_date":"20150413","end_date":"20160107","campaigns":8,
		"campaign_row": [
		{"campaign_id":364839378,"campaign_name":"Jennifer Nichols","daily_budget_row":3578,"perc_budget":"24.87397","clicks":21,"performance_row":"0.076","impressions":9719,"start_date_row":"20150721"},
		{"campaign_id":514677351,"campaign_name":"Katherine Bishop","daily_budget_row":1117,"perc_budget":"15.31456","clicks":334,"performance_row":"0.338","impressions":5867,"start_date_row":"20150707"},
		{"campaign_id":79624612,"campaign_name":"Phillip Kelley","daily_budget_row":3212,"perc_budget":"13.33532","clicks":244,"performance_row":"0.997","impressions":342,"start_date_row":"20160411"},
		{"campaign_id":585288685,"campaign_name":"Justin Lane","daily_budget_row":1087,"perc_budget":"5.23118","clicks":485,"performance_row":"0.562","impressions":10005,"start_date_row":"20151208"}

		]},

		{"line_id":931845605,"apendix_id":332901516,"name":"Voomm","budget":724997,"daily_budget":88593,"performance":"0.382","start_date":"20150222","end_date":"20160216","campaigns":7,
		"campaign_row": [
		{"campaign_id":714623686,"campaign_name":"Marie Sullivan","daily_budget_row":2889,"perc_budget":"3.37245","clicks":137,"performance_row":"0.448","impressions":1974,"start_date_row":"20150709"},
		{"campaign_id":457501223,"campaign_name":"Katherine Elliott","daily_budget_row":3023,"perc_budget":"61.57552","clicks":79,"performance_row":"0.1","impressions":12609,"start_date_row":"20151107"},
		{"campaign_id":713445974,"campaign_name":"Angela Mills","daily_budget_row":2546,"perc_budget":"73.81693","clicks":397,"performance_row":"0.431","impressions":4396,"start_date_row":"20160218"},
		{"campaign_id":711881669,"campaign_name":"Amanda Medina","daily_budget_row":2305,"perc_budget":"36.0515","clicks":410,"performance_row":"0.968","impressions":2965,"start_date_row":"20151210"}
		]},

		{"line_id":591905274,"apendix_id":931060532,"name":"Youspan","budget":131943,"daily_budget":72289,"performance":"0.677","start_date":"20160126","end_date":"20160324","campaigns":8,
		"campaign_row": [
		{"campaign_id":297996718,"campaign_name":"Ralph Fisher","daily_budget_row":2319,"perc_budget":"1.32624","clicks":137,"performance_row":"0.904","impressions":8967,"start_date_row":"20160503"},
		{"campaign_id":70143381,"campaign_name":"Jimmy Ortiz","daily_budget_row":3836,"perc_budget":"2.76191","clicks":306,"performance_row":"0.061","impressions":7627,"start_date_row":"20160117"},
		{"campaign_id":788966079,"campaign_name":"Nicole Cunningham","daily_budget_row":3434,"perc_budget":"61.57097","clicks":84,"performance_row":"0.202","impressions":12756,"start_date_row":"20150728"},
		{"campaign_id":255093502,"campaign_name":"Timothy Ramirez","daily_budget_row":2026,"perc_budget":"50.56404","clicks":461,"performance_row":"0.559","impressions":7495,"start_date_row":"20151130"}
		]},

		{"line_id":902248995,"apendix_id":415088274,"name":"Trilith","budget":413377,"daily_budget":90641,"performance":"0.845","start_date":"20150920","end_date":"20160808","campaigns":14,
		"campaign_row": [
		{"campaign_id":653666272,"campaign_name":"Terry King","daily_budget_row":2937,"perc_budget":"16.91634","clicks":49,"performance_row":"0.941","impressions":10912,"start_date_row":"20151205"},
		{"campaign_id":316125039,"campaign_name":"Kathy Parker","daily_budget_row":2170,"perc_budget":"44.64062","clicks":60,"performance_row":"0.878","impressions":10,"start_date_row":"20160525"},
		{"campaign_id":794827857,"campaign_name":"Anthony Palmer","daily_budget_row":3197,"perc_budget":"72.20939","clicks":367,"performance_row":"0.888","impressions":2618,"start_date_row":"20151221"},
		{"campaign_id":219346978,"campaign_name":"Antonio Richards","daily_budget_row":2508,"perc_budget":"96.7005","clicks":353,"performance_row":"0.656","impressions":6799,"start_date_row":"20160628"},
		{"campaign_id":953469735,"campaign_name":"Charles Schmidt","daily_budget_row":2898,"perc_budget":"51.3848","clicks":398,"performance_row":"0.533","impressions":3169,"start_date_row":"20150708"},
		{"campaign_id":788583143,"campaign_name":"Angela Watkins","daily_budget_row":3407,"perc_budget":"74.30014","clicks":252,"performance_row":"0.296","impressions":8985,"start_date_row":"20150815"},
		{"campaign_id":531547447,"campaign_name":"Fred Weaver","daily_budget_row":2634,"perc_budget":"5.45282","clicks":156,"performance_row":"0.975","impressions":3910,"start_date_row":"20150826"},
		{"campaign_id":476716720,"campaign_name":"Joan Bryant","daily_budget_row":1783,"perc_budget":"48.81074","clicks":415,"performance_row":"0.981","impressions":9526,"start_date_row":"20160209"},
		{"campaign_id":661386465,"campaign_name":"Robin Morrison","daily_budget_row":1153,"perc_budget":"11.2676","clicks":497,"performance_row":"0.424","impressions":9751,"start_date_row":"20150820"}
		]}
		

	   	];
	}








/*
      	      {line_id: 111, apendix_id: 222, name: "Medtronic Minneapolis Desktop paid", budget: 5558659, daily_budget: 18961, performance: 0.094076, start_date: 20160425, end_date: 20160524, campaigns: 3,
      campaign_row: [
      {campaign_id: 1467081040, campaign_name: "Vicki Neill OPEN_PA_N_N_N", daily_budget_row: 2221, perc_budget: 25.7937147654, clicks: 87, performance_row: 0.022, impressions: 4650, start_date_row: 20151008},
      {campaign_id: 1202773777, campaign_name: "Vicki Neill OPEN", daily_budget_row: 1516, perc_budget: 35.7937147654, clicks: 0, performance_row: 0.086, impressions: 1967, start_date_row: 20151028},
      {campaign_id: 3033410711, campaign_name: "Vicki Neill OPEN_PA_357_N", daily_budget_row: 747, perc_budget: 19.65201561, clicks: 22, performance_row: 0.065, impressions: 841, start_date_row: 20151018},
      {campaign_id: 4657809998, campaign_name: "Vicki Neill - Tier 1", daily_budget_row: 1721, perc_budget: 22.22489, clicks: 0, performance_row: 0, impressions: 129, start_date_row: 20151012}
      ]},

      	      {line_id: 111, apendix_id: 222, name: "Medtronic Minneapolis Desktop paid", budget: 5558659, daily_budget: 18961, performance: 0.094076, start_date: 20160425, end_date: 20160524, campaigns: 3,
      campaign_row: [
      {campaign_id: 1467081040, campaign_name: "Vicki Neill OPEN_PA_N_N_N", daily_budget_row: 2221, perc_budget: 25.7937147654, clicks: 87, performance_row: 0.022, impressions: 4650, start_date_row: 20151008},
      {campaign_id: 1202773777, campaign_name: "Vicki Neill OPEN", daily_budget_row: 1516, perc_budget: 35.7937147654, clicks: 0, performance_row: 0.086, impressions: 1967, start_date_row: 20151028},
      {campaign_id: 3033410711, campaign_name: "Vicki Neill OPEN_PA_357_N", daily_budget_row: 747, perc_budget: 19.65201561, clicks: 22, performance_row: 0.065, impressions: 841, start_date_row: 20151018},
      {campaign_id: 4657809998, campaign_name: "Vicki Neill - Tier 1", daily_budget_row: 1721, perc_budget: 22.22489, clicks: 0, performance_row: 0, impressions: 129, start_date_row: 20151012}
      ]},
*/



  render() {
    return (
	      <MarketingCampaigns data={this.data} />
    );
  }
}