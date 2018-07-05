/**
 * @module github
 */

const octokit = require('@octokit/rest')()
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

@RpsModule("github")
export default class RPSGithub {


  @rpsAction({verbName:'github-get-for-organization'})
  async getForOrg (ctx:RpsContext,opts:Object, organization:string,type?:string) : Promise<any>{
    
    return new Promise<any>(function(resolve,reject)  {
      octokit.repos.getForOrg({org: organization,type: type})
      .then(({data, headers, status}) => resolve(data)).catch(err => reject(err));
    });
  }

  @rpsAction({verbName:'github-get-for-user'})
  async getForUser (ctx:RpsContext,opts:Object, username:string) : Promise<any>{
    
    return new Promise<any>(function(resolve,reject)  {
      octokit.repos.getForUser({username:username})
      .then(({data, headers, status}) => resolve(data)).catch(err => reject(err));
    });
  }

}

