# eeps-sigma

**Behaviour-based Sigma detections, built from the latest primary threat research.**

![Rules](https://img.shields.io/badge/rules-18-2f5bd3) ![ATT&CK techniques](https://img.shields.io/badge/ATT%26CK%20techniques-19-555) ![Sigma](https://img.shields.io/badge/format-Sigma-0a7ea4) ![License: DRL 1.1](https://img.shields.io/badge/license-DRL%201.1-lightgrey)

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
| [Oracle PeopleSoft PSEMHUB JSP Web Shell Command Request](https://aienthues.github.io/eeps-sigma/rules/web_peoplesoft_psemhub_webshell_command_request.html) ([yml](rules/web/webserver/web_peoplesoft_psemhub_webshell_command_request.yml)) | Web server / webserver | high | [T1505.003](https://attack.mitre.org/techniques/T1505/003/), [T1082](https://attack.mitre.org/techniques/T1082/) |
| [Oracle PeopleSoft PSEMHUB Request Via Non-Normalized Path](https://aienthues.github.io/eeps-sigma/rules/web_peoplesoft_psemhub_non_normalized_path_request.html) ([yml](rules/web/webserver/web_peoplesoft_psemhub_non_normalized_path_request.yml)) | Web server / webserver | high | [T1190](https://attack.mitre.org/techniques/T1190/) |
| [Image Signed With Certificate Abused By SIDEEYE Loader](https://aienthues.github.io/eeps-sigma/rules/image_load_sideeye_ev_signer.html) ([yml](rules/windows/image_load/image_load_sideeye_ev_signer.yml)) | Windows / image load | high | [T1553.002](https://attack.mitre.org/techniques/T1553/002/) |
| [NeedyMantis Loader DLL Sideload From Masquerading Folder](https://aienthues.github.io/eeps-sigma/rules/image_load_win_needymantis_loader_dll_sideload_from_masquerading_folder.html) ([yml](rules/windows/image_load/image_load_win_needymantis_loader_dll_sideload_from_masquerading_folder.yml)) | Windows / image load | high | [T1574.001](https://attack.mitre.org/techniques/T1574/001/) |
| [NeedyMantis Loader DLL Written To Masquerading Folder](https://aienthues.github.io/eeps-sigma/rules/file_event_win_needymantis_loader_dll_written_to_masquerading_folder.html) ([yml](rules/windows/file_event/file_event_win_needymantis_loader_dll_written_to_masquerading_folder.yml)) | Windows / file event | high | [T1036.005](https://attack.mitre.org/techniques/T1036/005/) |
| [Payload Execution From Oracle PeopleSoft Web Application Archive Directory](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_peoplesoft_war_directory_payload_execution.html) ([yml](rules/windows/process_creation/proc_creation_win_peoplesoft_war_directory_payload_execution.yml)) | Windows / process creation | high | [T1059.003](https://attack.mitre.org/techniques/T1059/003/), [T1057](https://attack.mitre.org/techniques/T1057/), [T1083](https://attack.mitre.org/techniques/T1083/) |
| [PowerShell Invoke-RestMethod To Decimal-Encoded IP Host](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_powershell_irm_decimal_ip_host.html) ([yml](rules/windows/process_creation/proc_creation_win_powershell_irm_decimal_ip_host.yml)) | Windows / process creation | high | [T1105](https://attack.mitre.org/techniques/T1105/), [T1059.001](https://attack.mitre.org/techniques/T1059/001/) |
| [Python Tunneling Implant Client.py Executed From Users Public Indigo Folder](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_python_client_py_from_users_public_indigo.html) ([yml](rules/windows/process_creation/proc_creation_win_python_client_py_from_users_public_indigo.yml)) | Windows / process creation | high | [T1572](https://attack.mitre.org/techniques/T1572/) |
| [Run Key Value Set By Scripted Diagnostics Host Sdiagnhost.EXE](https://aienthues.github.io/eeps-sigma/rules/registry_set_win_run_key_value_set_by_sdiagnhost.html) ([yml](rules/windows/registry_set/registry_set_win_run_key_value_set_by_sdiagnhost.yml)) | Windows / registry set | high | [T1547.001](https://attack.mitre.org/techniques/T1547/001/), [T1218](https://attack.mitre.org/techniques/T1218/) |
| [Suspicious File Written To Oracle PeopleSoft Web Application Archive Directory - Windows](https://aienthues.github.io/eeps-sigma/rules/file_event_win_peoplesoft_war_directory_suspicious_file_write.html) ([yml](rules/windows/file_event/file_event_win_peoplesoft_war_directory_suspicious_file_write.yml)) | Windows / file event | high | [T1505.003](https://attack.mitre.org/techniques/T1505/003/), [T1105](https://attack.mitre.org/techniques/T1105/) |
| [Unsigned Ceiinfolog.DLL Loaded By Canon COTFileReadApp.EXE](https://aienthues.github.io/eeps-sigma/rules/image_load_win_cotfilereadapp_unsigned_ceiinfolog_dll_load.html) ([yml](rules/windows/image_load/image_load_win_cotfilereadapp_unsigned_ceiinfolog_dll_load.yml)) | Windows / image load | high | [T1574.001](https://attack.mitre.org/techniques/T1574/001/) |
| [Azure Resource Lock Deleted](https://aienthues.github.io/eeps-sigma/rules/azure_resource_lock_deleted.html) ([yml](rules/azure/activitylogs/azure_resource_lock_deleted.yml)) | Azure / activitylogs | medium | [T1490](https://attack.mitre.org/techniques/T1490/) |
| [Citrix NetScaler VPN Media Or Scripts Request With Spoofed 404 And Large Response](https://aienthues.github.io/eeps-sigma/rules/web_netscaler_vpn_media_scripts_spoofed_404_large_response.html) ([yml](rules/web/webserver/web_netscaler_vpn_media_scripts_spoofed_404_large_response.yml)) | Web server / webserver | medium | [T1505.003](https://attack.mitre.org/techniques/T1505/003/) |
| [NeedyMantis Firefox 21 User-Agent](https://aienthues.github.io/eeps-sigma/rules/proxy_needymantis_firefox_21_user_agent.html) ([yml](rules/web/proxy/proxy_needymantis_firefox_21_user_agent.yml)) | Web server / proxy | medium | [T1071.001](https://attack.mitre.org/techniques/T1071/001/) |
| [Azure Storage Account Deleted](https://aienthues.github.io/eeps-sigma/rules/azure_storage_account_deleted.html) ([yml](rules/azure/activitylogs/azure_storage_account_deleted.yml)) | Azure / activitylogs | low | [T1485](https://attack.mitre.org/techniques/T1485/), [T1490](https://attack.mitre.org/techniques/T1490/) |
| [PowerShell Spawned By MSP360 RMM Agent](https://aienthues.github.io/eeps-sigma/rules/proc_creation_win_msp360_rmm_agent_spawns_powershell.html) ([yml](rules/windows/process_creation/proc_creation_win_msp360_rmm_agent_spawns_powershell.yml)) | Windows / process creation | low | [T1059.001](https://attack.mitre.org/techniques/T1059/001/), [T1219.002](https://attack.mitre.org/techniques/T1219/002/) |

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
