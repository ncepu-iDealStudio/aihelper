#!/usr/bin/env python
# -*- coding:utf-8 -*-

# file:systemSchema.py
# author:song
# datetime:2023/4/6 19:40
# software: PyCharm

"""
后台接口所需的响应模型
"""

from pydantic import  BaseModel, validator


class ServerStatusSchema(BaseModel):
    active_user_in_5m: int = None
    active_user_in_1h: int = None
    active_user_in_1d: int = None
    is_chatbot_busy: bool = None
    chatbot_waiting_count: int = None


class RequestStatistics(BaseModel):
    request_counts_interval: int
    request_counts: dict[int, list]  # {timestage: [count, [user_ids]]}
    ask_records: list  # list of (ask, time_used), timestamp.


class SystemInfo(BaseModel):
    startup_time: float
    total_user_count: int
    total_conversation_count: int
    valid_conversation_count: int


class LogFilterOptions(BaseModel):
    max_lines: int = 100
    exclude_keywords: list[str] = None

    @validator("max_lines")
    def max_lines_must_be_positive(cls, v):
        if v <= 0:
            raise ValueError("max_lines must be positive")
        return v
