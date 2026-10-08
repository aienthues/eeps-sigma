# eeps-sigma

**Behaviour-based Sigma detections, built from the latest primary threat research.**

![Rules](https://img.shields.io/badge/rules-39-2f5bd3) ![ATT&CK techniques](https://img.shields.io/badge/ATT%26CK%20techniques-33-555) ![Sigma](https://img.shields.io/badge/format-Sigma-0a7ea4) ![License: DRL 1.1](https://img.shields.io/badge/license-DRL%201.1-lightgrey)

**Browse the rules with context, ATT&CK mapping and Splunk/KQL conversions: [https://aienthues.github.io/eeps-sigma/](https://aienthues.github.io/eeps-sigma/)**

## Why this exists

When a vendor publishes how an intrusion actually worked, defenders need detections for the *behaviour*,
not just indicators that change tomorrow. This repository turns fresh primary research into validated,
ATT&CK-mapped Sigma rules, each with the reasoning, source and false-positive guidance attached.

- **Speed to detection.** New research becomes deployable detection logic within a day or two.
- **Behaviour over indicators.** Rules target process lineage, paths, command patterns and cloud API use.
  Hash, IP and domain-only rules are excluded (Pyramid of Pain).
- **Traceable.** Every selection value comes from a cited primary report. No invented values.

## Approach

| Step | What happens |
|---|---|
| Source | Vetted primary research only: vendor threat intel teams, DFIR write-ups, government advisories |
| Extract | Observable behaviours with evidence, ATT&CK technique and a realistic log source |
| Engineer | Sigma with precise modifiers, overlap check against public rule sets, documented false positives |
| Validate | Schema and policy checks, pySigma parse, Splunk + KQL compile, live ATT&CK tag validation |
| Review | Independent adversarial review of every value and its false-positive risk before publication |

## Rules

| Rule | Platform | Level | ATT&CK |
|---|---|---|---|
| [JSP File Written To Oracle PeopleSoft Web Application Archive Directory - Linux](https://aienthues.github.io/eeps-sigma/rules/file_event_lnx_peoplesoft_war_directory_jsp_write.html) ([yml](rules/linux/file_event/file_event_lnx_peoplesoft_war_directory_jsp_write.yml)) | Linux / file event | high | [T1505.003](https://attack.mitre.org/techniques/T1505/003/) |
| [MeshAgent Executed From Temporary Directory - Linux](https://aienthues.github.io/eeps-sigma/rules/proc_creation_lnx_meshagent_execution_from_tmp.html) ([yml](rules/linux/process_creation/proc_creation_lnx_meshagent_execution_from_tmp.yml)) | Linux / process creation | high | [T1219](https://attack.mitre.org/techniques/T1219/) |
| [Zimbra JSP Written To Jetty Or Mailboxd Webapps By Shell Or Transfer Tool - Linux](https://aienthues.github.io/eeps-sigma/rules/file_event_lnx_zimbra_jsp_written_to_jetty_mailboxd_webapps_by_shell_or_transfer_tool.html) ([yml](rules/linux/file_event/file_event_lnx_zimbra_jsp_written_to_jetty_mailboxd_webapps_by_shell_or_transfer_tool.yml)) | Linux / file event | high | [T1505.003](https://attack.mitre.org/techniques/T1505/003/), [T1570](https://attack.mitre.org/techniques/T1570/) |
| [Zimbra Swatchdog Command Injection Child Process - Linux](https://aienthues.github.io/eeps-sigma/rules/proc_creation_lnx_zimbra_swatchdog_command_injection_child_process.html) ([yml](rules/linux/process_creation/proc_creation_lnx_zimbra_swatchdog_command_injection_child_process.yml)) | Linux / process creation | high | [T1190](https://attack.mitre.org/techniques/T1190/), [T1059.004](https://attack.mitre.org/techniques/T1059/004/), [T1620](https://attack.mitre.org/techniques/T1620/) |
| [Zimbra Zmmailboxd.out Log Linked To PAM Sudo Config - Linux](https://aienthues.github.io/eeps-sigma/rules/proc_creation_lnx_zimbra_zmmailboxd_out_linked_to_pam_sudo_config.html) ([yml](rules/linux/process_creation/proc_creation_lnx_zimbra_zmmailboxd_out_linked_to_pam_sudo_config.yml)) | Linux / process creation | high | [T1068](https://attack.mitre.org/techniques/T1068/) |
| [ASPX Request To Documents MemberFiles Upload Directory](https://aienthues.github.io/eeps-sigma/rules/web_aspx_request_to_documents_memberfiles_upload_directory.html) ([yml](rules/web/webserver/web_aspx_request_to_documents_memberfiles_upload_directory.yml)) | Web server / webserver | high | [T1505.003](https://attack.mitre.org/techniques/T1505/003/) |
| [Oracle PeopleSoft PSEMHUB JSP Web Shell Command Request](https://aienthues.github.io/eeps-sigma/rules/web_peoplesoft_psemhub_webshell_command_request.html) ([yml](rules/web/webserver/web_peoplesoft_psemhub_webshell_command_request.yml)) | Web server / webserver | high | [T1505.003](https://attack.mitre.org/techniques/T1505/003/), [T1082](https://attack.mitre.org/techniques/T1082/) |
| [Oracle PeopleSoft PSEMHUB Request Via Non-Normalized Path](https://aienthues.github.io/eeps-sigma/rules/web_peoplesoft_psemhub_non_normalized_path_request.html) ([yml](rules/web/webserver/web_peoplesoft_psemhub_non_normalized_path_request.yml)) | Web server / webserver | high | [T1190](https://attack.mitre.org/techniques/T1190/) |
| [Caret-Escaped Cmd For-Loop Launched From Explorer - ClickFix](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_explorer_cmd_caret_escaped_for_loop_clickfix.html) ([yml](rules/windows/process_creation/proc_creation_win_explorer_cmd_caret_escaped_for_loop_clickfix.yml)) | Windows / process creation | high | [T1204.004](https://attack.mitre.org/techniques/T1204/004/), [T1027.010](https://attack.mitre.org/techniques/T1027/010/) |
| [Cmd Copies Files From Network Share To Users Public And Starts Them In Background](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_cmd_copy_from_share_to_users_public_and_start_background.html) ([yml](rules/windows/process_creation/proc_creation_win_cmd_copy_from_share_to_users_public_and_start_background.yml)) | Windows / process creation | high | [T1570](https://attack.mitre.org/techniques/T1570/), [T1059.003](https://attack.mitre.org/techniques/T1059/003/) |
| [Image Signed With Certificate Abused By SIDEEYE Loader](https://aienthues.github.io/eeps-sigma/rules/image_load_sideeye_ev_signer.html) ([yml](rules/windows/image_load/image_load_sideeye_ev_signer.yml)) | Windows / image load | high | [T1553.002](https://attack.mitre.org/techniques/T1553/002/) |
| [NeedyMantis Loader DLL Sideload From Masquerading Folder](https://aienthues.github.io/eeps-sigma/rules/image_load_win_needymantis_loader_dll_sideload_from_masquerading_folder.html) ([yml](rules/windows/image_load/image_load_win_needymantis_loader_dll_sideload_from_masquerading_folder.yml)) | Windows / image load | high | [T1574.001](https://attack.mitre.org/techniques/T1574/001/) |
| [NeedyMantis Loader DLL Written To Masquerading Folder](https://aienthues.github.io/eeps-sigma/rules/file_event_win_needymantis_loader_dll_written_to_masquerading_folder.html) ([yml](rules/windows/file_event/file_event_win_needymantis_loader_dll_written_to_masquerading_folder.yml)) | Windows / file event | high | [T1036.005](https://attack.mitre.org/techniques/T1036/005/) |
| [Payload Execution From Oracle PeopleSoft Web Application Archive Directory](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_peoplesoft_war_directory_payload_execution.html) ([yml](rules/windows/process_creation/proc_creation_win_peoplesoft_war_directory_payload_execution.yml)) | Windows / process creation | high | [T1059.003](https://attack.mitre.org/techniques/T1059/003/), [T1057](https://attack.mitre.org/techniques/T1057/), [T1083](https://attack.mitre.org/techniques/T1083/) |
| [PowerShell Command Line Loads System.Workflow.ComponentModel Via Reflection](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_powershell_reflection_load_system_workflow_componentmodel.html) ([yml](rules/windows/process_creation/proc_creation_win_powershell_reflection_load_system_workflow_componentmodel.yml)) | Windows / process creation | high | [T1059.001](https://attack.mitre.org/techniques/T1059/001/) |
| [PowerShell Invoke-RestMethod To Decimal-Encoded IP Host](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_powershell_irm_decimal_ip_host.html) ([yml](rules/windows/process_creation/proc_creation_win_powershell_irm_decimal_ip_host.yml)) | Windows / process creation | high | [T1105](https://attack.mitre.org/techniques/T1105/), [T1059.001](https://attack.mitre.org/techniques/T1059/001/) |
| [PowerShell Writes Base64-Decoded ASPX File To SharePoint Layouts Directory](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_powershell_writeallbytes_base64_aspx_to_sharepoint_layouts.html) ([yml](rules/windows/process_creation/proc_creation_win_powershell_writeallbytes_base64_aspx_to_sharepoint_layouts.yml)) | Windows / process creation | high | [T1505.003](https://attack.mitre.org/techniques/T1505/003/) |
| [Python Tunneling Implant Client.py Executed From Users Public Indigo Folder](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_python_client_py_from_users_public_indigo.html) ([yml](rules/windows/process_creation/proc_creation_win_python_client_py_from_users_public_indigo.yml)) | Windows / process creation | high | [T1572](https://attack.mitre.org/techniques/T1572/) |
| [Run Key Value Launching RuntimeBroker.EXE](https://aienthues.github.io/eeps-sigma/rules/registry_set_win_run_key_value_launching_runtimebroker_exe.html) ([yml](rules/windows/registry_set/registry_set_win_run_key_value_launching_runtimebroker_exe.yml)) | Windows / registry set | high | [T1547.001](https://attack.mitre.org/techniques/T1547/001/) |
| [Run Key Value Set By Scripted Diagnostics Host Sdiagnhost.EXE](https://aienthues.github.io/eeps-sigma/rules/registry_set_win_run_key_value_set_by_sdiagnhost.html) ([yml](rules/windows/registry_set/registry_set_win_run_key_value_set_by_sdiagnhost.yml)) | Windows / registry set | high | [T1547.001](https://attack.mitre.org/techniques/T1547/001/), [T1218](https://attack.mitre.org/techniques/T1218/) |
| [RuntimeBroker.EXE Application Configuration File Created](https://aienthues.github.io/eeps-sigma/rules/file_event_win_runtimebroker_exe_config_file_created.html) ([yml](rules/windows/file_event/file_event_win_runtimebroker_exe_config_file_created.yml)) | Windows / file event | high | [T1574.014](https://attack.mitre.org/techniques/T1574/014/) |
| [Scheduled Task MeshFwFix Created](https://aienthues.github.io/eeps-sigma/rules/win_security_scheduled_task_meshfwfix_created.html) ([yml](rules/windows/security/win_security_scheduled_task_meshfwfix_created.yml)) | Windows / security | high | [T1053.005](https://attack.mitre.org/techniques/T1053/005/) |
| [Script Executed From Windows Temp .bea-cache Folder](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_script_executed_from_windows_temp_bea_cache.html) ([yml](rules/windows/process_creation/proc_creation_win_script_executed_from_windows_temp_bea_cache.yml)) | Windows / process creation | high | [T1685](https://attack.mitre.org/techniques/T1685/) |
| [Suspicious File Written To Oracle PeopleSoft Web Application Archive Directory - Windows](https://aienthues.github.io/eeps-sigma/rules/file_event_win_peoplesoft_war_directory_suspicious_file_write.html) ([yml](rules/windows/file_event/file_event_win_peoplesoft_war_directory_suspicious_file_write.yml)) | Windows / file event | high | [T1505.003](https://attack.mitre.org/techniques/T1505/003/), [T1105](https://attack.mitre.org/techniques/T1105/) |
| [Unsigned Ceiinfolog.DLL Loaded By Canon COTFileReadApp.EXE](https://aienthues.github.io/eeps-sigma/rules/image_load_win_cotfilereadapp_unsigned_ceiinfolog_dll_load.html) ([yml](rules/windows/image_load/image_load_win_cotfilereadapp_unsigned_ceiinfolog_dll_load.yml)) | Windows / image load | high | [T1574.001](https://attack.mitre.org/techniques/T1574/001/) |
| [Azure Resource Lock Deleted](https://aienthues.github.io/eeps-sigma/rules/azure_resource_lock_deleted.html) ([yml](rules/azure/activitylogs/azure_resource_lock_deleted.yml)) | Azure / activitylogs | medium | [T1490](https://attack.mitre.org/techniques/T1490/) |
| [Citrix NetScaler VPN Media Or Scripts Request With Spoofed 404 And Large Response](https://aienthues.github.io/eeps-sigma/rules/web_netscaler_vpn_media_scripts_spoofed_404_large_response.html) ([yml](rules/web/webserver/web_netscaler_vpn_media_scripts_spoofed_404_large_response.yml)) | Web server / webserver | medium | [T1505.003](https://attack.mitre.org/techniques/T1505/003/) |
| [NeedyMantis Firefox 21 User-Agent](https://aienthues.github.io/eeps-sigma/rules/proxy_needymantis_firefox_21_user_agent.html) ([yml](rules/web/proxy/proxy_needymantis_firefox_21_user_agent.yml)) | Web server / proxy | medium | [T1071.001](https://attack.mitre.org/techniques/T1071/001/) |
| [Base64 Encoded Script Staged In Windows Temp](https://aienthues.github.io/eeps-sigma/rules/file_event_win_base64_encoded_script_staged_in_windows_temp.html) ([yml](rules/windows/file_event/file_event_win_base64_encoded_script_staged_in_windows_temp.yml)) | Windows / file event | medium | [T1140](https://attack.mitre.org/techniques/T1140/), [T1027.013](https://attack.mitre.org/techniques/T1027/013/) |
| [Bitdefender Endpoint Service Stopped](https://aienthues.github.io/eeps-sigma/rules/win_system_bitdefender_endpoint_service_stopped.html) ([yml](rules/windows/system/win_system_bitdefender_endpoint_service_stopped.yml)) | Windows / system | medium | [T1685](https://attack.mitre.org/techniques/T1685/) |
| [Defender Exclusion Added Via MSFT_MpPreference CIM Method - PowerShell](https://aienthues.github.io/eeps-sigma/rules/posh_ps_defender_exclusion_added_via_msft_mppreference_cim_method.html) ([yml](rules/windows/ps_script/posh_ps_defender_exclusion_added_via_msft_mppreference_cim_method.yml)) | Windows / ps script | medium | [T1685](https://attack.mitre.org/techniques/T1685/) |
| [Defender HideExclusionsFromLocalAdmins Value Set](https://aienthues.github.io/eeps-sigma/rules/registry_set_win_defender_hide_exclusions_from_local_admins.html) ([yml](rules/windows/registry_set/registry_set_win_defender_hide_exclusions_from_local_admins.yml)) | Windows / registry set | medium | [T1685](https://attack.mitre.org/techniques/T1685/), [T1112](https://attack.mitre.org/techniques/T1112/) |
| [Executable Or Staged DLL Created In System32 0409 Folder](https://aienthues.github.io/eeps-sigma/rules/file_event_win_executable_or_dll_tmp_created_in_system32_0409.html) ([yml](rules/windows/file_event/file_event_win_executable_or_dll_tmp_created_in_system32_0409.yml)) | Windows / file event | medium | [T1574.001](https://attack.mitre.org/techniques/T1574/001/) |
| [Executable Written To SYSVOL Scripts Folder By DFS Replication Service](https://aienthues.github.io/eeps-sigma/rules/file_event_win_dfsrs_executable_written_to_sysvol_scripts.html) ([yml](rules/windows/file_event/file_event_win_dfsrs_executable_written_to_sysvol_scripts.yml)) | Windows / file event | medium | [T1570](https://attack.mitre.org/techniques/T1570/) |
| [Findstr Search For Payment Card Data Fields](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_findstr_payment_card_data_search.html) ([yml](rules/windows/process_creation/proc_creation_win_findstr_payment_card_data_search.yml)) | Windows / process creation | medium | [T1005](https://attack.mitre.org/techniques/T1005/) |
| [Visual Studio Code Tunnel Installed As A Service Via Command Line](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_vscode_tunnel_service_install_command.html) ([yml](rules/windows/process_creation/proc_creation_win_vscode_tunnel_service_install_command.yml)) | Windows / process creation | medium | [T1219.001](https://attack.mitre.org/techniques/T1219/001/) |
| [Azure Storage Account Deleted](https://aienthues.github.io/eeps-sigma/rules/azure_storage_account_deleted.html) ([yml](rules/azure/activitylogs/azure_storage_account_deleted.yml)) | Azure / activitylogs | low | [T1485](https://attack.mitre.org/techniques/T1485/), [T1490](https://attack.mitre.org/techniques/T1490/) |
| [PowerShell Spawned By MSP360 RMM Agent](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_msp360_rmm_agent_spawns_powershell.html) ([yml](rules/windows/process_creation/proc_creation_win_msp360_rmm_agent_spawns_powershell.yml)) | Windows / process creation | low | [T1059.001](https://attack.mitre.org/techniques/T1059/001/), [T1219.002](https://attack.mitre.org/techniques/T1219/002/) |
| [ScreenConnect RunFile Execution From Documents Temp Folder](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_screenconnect_runfile_from_documents_temp.html) ([yml](rules/windows/process_creation/proc_creation_win_screenconnect_runfile_from_documents_temp.yml)) | Windows / process creation | low | [T1219.002](https://attack.mitre.org/techniques/T1219/002/), [T1105](https://attack.mitre.org/techniques/T1105/) |

## Using the rules

```bash
pip install sigma-cli
sigma plugin install splunk        # or: kusto, elasticsearch, ...
sigma convert -t splunk -p sysmon rules/windows/
```

All rules are `status: experimental`. Test and tune them against your own telemetry before production use.

## About

**Esmond Er**, Detection engineer · 12+ years in cybersecurity · Singapore.

I build detection content for enterprise SOCs across Splunk, Microsoft Sentinel and Google SecOps. This repository is where I turn newly published threat research into behaviour-based detections, openly and with the reasoning attached.

Certifications: GCDA, GMON, GPEN, GDAT

[GitHub](https://github.com/aienthues)

## How this is produced

Research triage and first drafts are AI-assisted. Every rule is traced to a primary source, passes automated schema, compile and ATT&CK checks, and is independently reviewed before it is published here.

## License

Rules are released under the [Detection Rule License (DRL) 1.1](LICENSE.md).
