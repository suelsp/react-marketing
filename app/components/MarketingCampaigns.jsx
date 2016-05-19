import React from 'react';
export default class MarketingCampaigns extends React.Component {
  /*
  	Component that renders rows of campaigns. Takes a data array of objects
  */
	constructor(props){
  	super(props);
  }
	render(){
    let {data} = this.props;
    
    let rows = data.map( (details, i) => <CampaignRow details={details} key={i} /> );

    return (
      <table border="1">
      	<tr>
        	<tr>
            <td className="line-id-th" align="Left">Line Id</td>
            <td align="Left">Apendix Id</td>
            <td align="Left">Name</td>
            <td align="Left">Budget</td>
            <td align="Left">Daily Budget</td>
            <td align="Left">Performance</td>
            <td align="Left">Start Date</td>
            <td align="Left">End Date</td>
            <td align="Left">Campaigns</td>
          </tr>
        </tr>
    		<tbody>{rows}</tbody>
      </table>
    )
  }
}




class CampaignRow extends React.Component {
  constructor(props){
    super(props);
    this.state = { viewCampaignDetails: false };
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState({viewCampaignDetails: !this.state.viewCampaignDetails});
  }
  render(){
    let {details} = this.props;
    let {viewCampaignDetails} = this.state;   
    let campaignDetails = [];
    
    if(viewCampaignDetails){
      campaignDetails = details.campaign_row.map( (campaign_row, i) => <tr key={i}>

                                                    <td>{campaign_row.campaign_id}</td>
                                                    <td>{campaign_row.campaign_name}</td>
                                                    <td>{campaign_row.daily_budget_row}</td>
                                                    <td>{campaign_row.perc_budget}</td>
                                                    <td>{campaign_row.clicks}</td>
                                                    <td>{campaign_row.performance_row}</td>
                                                    <td>{campaign_row.impressions}</td>
                                                    <td>{campaign_row.start_date_row}</td>       

                                                </tr>)
    }
    return (
      <tr colspan="1" align="Left">
          <tr align="Left">
            <td align="Left" className="arrow-td">
              <a className={Boolean(viewCampaignDetails) ? 'toggle-view rotate-me': 'toggle-view'} href="javascript:;" onClick={this.handleClick}>
                <img src="http://image005.flaticon.com/55/svg/60/60758.svg" />
              </a>
            </td>
            <td className="firstone" align="Left">{details.line_id}</td>
            <td align="Left">{details.apendix_id}</td>
            <td align="Left">{details.name}</td>
            <td align="Left">{details.budget}</td>
            <td align="Left">{details.daily_budget}</td>
            <td align="Left">{details.performance}</td>
            <td align="Left">{details.start_date}</td>
            <td align="Left">{details.end_date}</td>
            <td align="Left">{details.campaigns}</td>
          </tr>
          {Boolean(viewCampaignDetails) &&
            <tr align="Left">
              <td>
                <table>
                  <thead>
                    <tr>
                      <th align="Left">Campaign Id</th>
                      <th align="Left">Name</th>
                      <th align="Left">Daily Budget</th>
                      <th align="Left">% Budget</th>
                      <th align="Left">Clicks</th>
                      <th align="Left">Performance</th>
                      <th align="Left">Impressions</th>
                      <th align="Left">Start Date</th>
                    </tr>
                  </thead>
                  <tbody>{campaignDetails}</tbody>
                </table>
              </td>
            </tr>


          }
            <tr align="Left">
              <td colspan="6">
               TEST
              </td>
            </tr>
        
      </tr>
    )
  }
}