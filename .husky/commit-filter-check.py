#!/usr/bin/env python

import sys
import re


def main():
    commit_msg = sys.argv[1]
    prefix_list = ['feat', 'fix', 'docs', 'breaking']

    is_valid_prefix = any(prefix in commit_msg for prefix in prefix_list)

    # Checks commit_msg for string feat, fix, docs and breaking, if the messagecheck var is empty if fails
    if not commit_msg or not is_valid_prefix:
        print("Your commit message must begin with one of the following formats:")
        print("  feat(feature-name)")
        print("  fix(fix-name)")
        print("  docs(docs-change)")
        print("  breaking(breaking-feature-name)")
        sys.exit(1)

    # check the commit_msg for the Jira number
    jira_ticket_postfix = "(GOC-"
    is_valid_postfix = commit_msg.find(jira_ticket_postfix) != -1

    if not is_valid_postfix:
        print("Your commit message must end with the following")
        print("  (POC-****)")
        print("Where **** is the Jira number")
        print(" ")
        sys.exit(1)

    delimiter = ":"
    is_valid_delimiter = commit_msg.find(delimiter) != -1

    message_pattern_regex = "^(feat|docs|fix|breaking) *\( *(.*?) *\) *: *(.*?) *\( *(.*?) *\)$"
    is_matched = re.match(message_pattern_regex, commit_msg)

    if not is_valid_delimiter or not is_matched:
        print(
            "\nYour commit message has a formatting error. Please take a note of special characters '():' position as "
            "used in the example below\n")
        print("Synopsis:: type(some txt): some txt (POC-****)")
        print("Here: 'type' = " + str(prefix_list) + " and **** is the Jira number")
        print("\ne.g:  fix(fix-validation): add query param validation (POC-1045)")
        print(" ")
        sys.exit(1)


main()
